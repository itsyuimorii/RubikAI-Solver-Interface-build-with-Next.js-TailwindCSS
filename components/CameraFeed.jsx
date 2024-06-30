'use client'
import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const category_index = {
  1: {
    'id': 1,
    'name': 'face'
  },
  2: {
    'id': 2,
    'name': 'red_tile'
  },
  3: {
    'id': 3,
    'name': 'white_tile'
  },
  4: {
    'id': 4,
    'name': 'blue_tile'
  },
  5: {
    'id': 5,
    'name': 'orange_tile'
  },
  6: {
    'id': 6,
    'name': 'green_tile'
  },
  7: {
    'id': 7,
    'name': 'yellow_tile'
  }
};

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
        video: { facingMode: 'environment' }
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
      await detectFrame(videoRef.current!, model); // Added await here
    };

    const detectFrame = async (video: HTMLVideoElement, model: tf.GraphModel) => {
      if (!video.videoWidth || !video.videoHeight) {
        return new Promise<void>(resolve => {
          requestAnimationFrame(() => {
            resolve(detectFrame(video, model));
          });
        });
      }
      const model_height = 640
      const model_width = 640
      const inputTensor = tf.browser.fromPixels(video)
        .resizeBilinear([model_height, model_width])
        .toInt()
        .expandDims();

      const predictions = await model.executeAsync(inputTensor) as tf.Tensor[];

      if (predictions.length === 0) {
        return new Promise<void>(resolve => {
          requestAnimationFrame(() => {
            resolve(detectFrame(video, model));
          });
        });
      }

      // Extract predictions from tensors
      const boxes = await predictions[3].array() as number[][];
      const classes = await predictions[0].array() as number[];
      const scores = await predictions[4].array() as number[];

      // Assuming only one batch, otherwise iterate over batches
      console.assert(boxes.length === 1);

      const predictionsArray = boxes[0].map((box, i) => ({
        bbox: [
          box[1] * (video.videoWidth / model_width), // Adjust x
          box[0] * (video.videoHeight / model_height), // Adjust y
          (box[3] - box[1]) * (video.videoWidth / model_width), // Adjust width
          (box[2] - box[0]) * (video.videoHeight / model_height) // Adjust height
        ],
        class: category_index[classes[0][i]].name,
        score: scores[0][i]
      })) as Prediction[];

      renderPredictions(predictionsArray);
      return new Promise<void>(resolve => {
        requestAnimationFrame(() => {
          resolve(detectFrame(video, model));
        });
      });
    };

    const renderPredictions = (predictions: Prediction[]) => {
      const ctx = canvasRef.current!.getContext('2d');
      if (!ctx) return;

      ctx.canvas.width = videoRef.current!.videoWidth;
      ctx.canvas.height = videoRef.current!.videoHeight;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, videoRef.current!.videoWidth, videoRef.current!.videoHeight);

      predictions.forEach(prediction => {
        if (prediction.score < 0.8) {
          return;
        }

        const [x, y, width, height] = prediction.bbox;
        const text = `${prediction.class} (${Math.round(prediction.score * 100)}%)`;

        ctx.strokeStyle = '#00FFFF';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);

        ctx.fillStyle = '#00FFFF';
        const textWidth = ctx.measureText(text).width;
        const textHeight = 16; // Assuming font size of 16px
        ctx.fillRect(x, y - textHeight, textWidth + 4, textHeight);

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
