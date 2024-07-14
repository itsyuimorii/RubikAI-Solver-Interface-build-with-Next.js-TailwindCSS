'use client';
import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { useDispatch } from 'react-redux';
import { updatePredictions } from '@/store/predictionsReducer';  

const categoryIndex = {
  1: { id: 1, name: 'face', font_color: "#FFFFFF", box_color: "#000000" },
  2: { id: 2, name: 'red_tile', font_color: "#000000", box_color: "#FF0000" },
  3: { id: 3, name: 'white_tile', font_color: "#000000", box_color: "#FFFFFF" },
  4: { id: 4, name: 'blue_tile', font_color: "#000000", box_color: "#0000FF" },
  5: { id: 5, name: 'orange_tile', font_color: "#000000", box_color: "#FFA500" },
  6: { id: 6, name: 'green_tile', font_color: "#000000", box_color: "#00FF00" },
  7: { id: 7, name: 'yellow_tile', font_color: "#000000", box_color: "#FFFF00" },
};

const CameraFeed = ({ modelPath }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      videoRef.current.srcObject = stream;

      return new Promise(resolve => {
        videoRef.current.onloadedmetadata = () => {
          resolve(videoRef.current);
        };
      });
    };

    const loadModel = async () => {
      console.log("Loading model...");
      await setupCamera();
      const model = await tf.loadGraphModel(modelPath);
      console.log("Model loaded:", model);
      await detectFrame(videoRef.current, model);
    };

    const detectFrame = async (video, model) => {
      if (!video.videoWidth || !video.videoHeight) {
        return new Promise(resolve => {
          requestAnimationFrame(() => {
            resolve(detectFrame(video, model));
          });
        });
      }
      const inputTensor = tf.browser.fromPixels(video).expandDims();

      const predictions = await model.executeAsync(inputTensor);

      if (predictions.length === 0) {
        return new Promise(resolve => {
          requestAnimationFrame(() => {
            resolve(detectFrame(video, model));
          });
        });
      }

      // Extract predictions from tensors
      const boxes = await predictions[3].array();
      const classes = await predictions[0].array();
      const scores = await predictions[4].array();

      // Assuming only one batch, otherwise iterate over batches
      console.assert(boxes.length === 1);

      let predictionsArray = boxes[0].map((box, i) => ({
        bbox: [
          box[1], // Adjust x
          box[0], // Adjust y
          (box[3] - box[1]), // Adjust width
          (box[2] - box[0]) // Adjust height
        ],
        class: categoryIndex[classes[0][i]].name,
        box_color: categoryIndex[classes[0][i]].box_color,
        font_color: categoryIndex[classes[0][i]].font_color,
        score: scores[0][i]
      }));

      predictionsArray = predictionsArray.filter(prediction => prediction.score > 0.85);

      console.log(predictionsArray);

      dispatch(updatePredictions(predictionsArray));

      renderPredictions(predictionsArray);
      return new Promise(resolve => {
        requestAnimationFrame(() => {
          resolve(detectFrame(video, model));
        });
      });
    };

    const renderPredictions = (predictions) => {
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      ctx.canvas.width = videoRef.current.videoWidth;
      ctx.canvas.height = videoRef.current.videoHeight;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      predictions.forEach(prediction => {
        const [x, y, width, height] = prediction.bbox;

        ctx.strokeStyle = prediction.box_color;
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);

        ctx.font = '8px Arial';
        ctx.fillStyle = prediction.box_color;
        const textHeight = 8;
        let text = "";
        let textBoxY = 0;
        if (prediction.class === "face") {
          text = `${prediction.class} (${Math.round(prediction.score * 100)}%)`;
          textBoxY = y - textHeight;
        } else {
          text = `${Math.round(prediction.score * 100)}%`;
          textBoxY = y;
        }
        ctx.fillRect(x, textBoxY, width, textHeight);
        ctx.fillStyle = prediction.font_color;
        ctx.fillText(text, x, textBoxY + textHeight);
      });
    };

    loadModel();
  }, [modelPath, dispatch]);

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
