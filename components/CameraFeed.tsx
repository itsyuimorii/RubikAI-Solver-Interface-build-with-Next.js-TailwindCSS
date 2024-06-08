'use client'
import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

interface CameraFeedProps {
  modelPath: string;
}

interface Prediction {
  bbox: [number, number, number, number]; // [x, y, width, height]
  class: string;
  score: number;
}

const CameraFeed: React.FC<CameraFeedProps> = ({ modelPath }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: 'environment' }
      });
      videoRef.current!.srcObject = stream;

      return new Promise<HTMLVideoElement>((resolve) => {
        videoRef.current!.onloadedmetadata = () => {
          resolve(videoRef.current!);
        };
      });
    };

    const loadModel = async () => {
      console.log("Loading model...");
      await setupCamera();
      const model = await tf.loadGraphModel(modelPath);
      console.log("Model loaded:", model);
      detectFrame(videoRef.current!, model);
    };

    const detectFrame = async (video: HTMLVideoElement, model: tf.GraphModel) => {
      if (!video.videoWidth || !video.videoHeight) {
        requestAnimationFrame(() => detectFrame(video, model));
        return;
      }

      const inputTensor = tf.browser.fromPixels(video).resizeBilinear([640, 640]).expandDims(0).toInt();
      console.log("Input tensor shape:", inputTensor.shape);

      const predictions = await model.executeAsync({ 'input_tensor': inputTensor }) as tf.Tensor[];
      console.log("Predictions:", predictions);

      if (predictions.length === 0) {
        console.log("No predictions made");
        requestAnimationFrame(() => detectFrame(video, model));
        return;
      }

      const boxes = await predictions[0].array() as number[][];
      const classes = await predictions[1].array() as string[];
      const scores = await predictions[2].array() as number[];

      const predictionsArray = boxes.map((box, i) => ({
        bbox: box as [number, number, number, number],
        class: classes[i],
        score: scores[i]
      })) as Prediction[];

      console.log("Processed predictions:", predictionsArray);

      renderPredictions(predictionsArray);
      requestAnimationFrame(() => detectFrame(video, model));
    };

    const renderPredictions = (predictions: Prediction[]) => {
      const ctx = canvasRef.current!.getContext('2d');
      if (!ctx) return;

      console.log("Rendering predictions...");

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.canvas.width = videoRef.current!.videoWidth;
      ctx.canvas.height = videoRef.current!.videoHeight;

      predictions.forEach(prediction => {
        const [x, y, width, height] = prediction.bbox;
        const text = `${prediction.class} (${Math.round(prediction.score * 100)}%)`;

        console.log("Drawing box:", { x, y, width, height, text });
        console.log(videoRef.current?.videoHeight, videoRef.current?.videoWidth)

        // Draw bounding box
        ctx.strokeStyle = '#00FFFF';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);

        // Draw label background
        ctx.fillStyle = '#00FFFF';
        const textWidth = ctx.measureText(text).width;
        const textHeight = 16; // Assuming font size of 16px
        ctx.fillRect(x, y - textHeight, textWidth + 4, textHeight);

        // Draw text
        ctx.fillStyle = '#000000';
        ctx.font = '16px Arial';
        ctx.fillText(text, x, y - 4);
      });
    };

    loadModel();
  }, [modelPath]);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full h-auto"
        autoPlay
        muted
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default CameraFeed;
