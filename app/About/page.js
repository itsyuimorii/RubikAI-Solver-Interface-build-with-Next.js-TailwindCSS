'use client';

export default function About() {
    return (
        <main className="relative h-screen">
            <h1>Cube Tile Detection Model for Web-Based Puzzle Solving</h1>
            <p>This AI project focuses on training a deep learning model using RetinaNet Mobile architecture from the COCO dataset to detect specific tiles on the face of a cube. The model is trained on 100 different images and is built in Python. To ensure compatibility with web applications, the trained model is converted into TensorFlow.js, allowing it to run efficiently on the frontend of websites.</p>
        </main>
    );
}