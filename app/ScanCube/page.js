// import CameraFeed from "@/components/CameraFeed";
'use client';

import CameraFeed from "@/components/CameraFeed";
import Footer from '@/components/Footer';
import CubeLayout from '@/components/ScanCube/CubeLayout';
import { useSelector } from 'react-redux';

import store from '@/components/Store/store';

export default function ScanCube() {
    //make an array of 6 elements, each with 9 null values
    const { cubeStateArray } = useSelector(state => state.cubeState);

    // console.log('cubeStateArray', cubeStateArray);

    const handleCapture = () => {
        const { predictionsArray } = store.getState().predictions;
        console.log(predictionsArray);


        const marginOfError = 10; // Adjust this margin as needed
        let sortedPredictionsArray = [...predictionsArray].sort((firstTile, secondTile) => {
            const yDiff = firstTile.bbox[1] - secondTile.bbox[1];
            if (Math.abs(yDiff) <= marginOfError) {
                // If y difference is within the margin of error, compare x
                return firstTile.bbox[0] - secondTile.bbox[0];
            }
            // Otherwise, sort by y
            return yDiff;
        });
        console.log("Click Button To Capture Surface => Sorted", sortedPredictionsArray);
    };

    return (
        <main className="relative h-screen">
            <div className='bg-black relative flex items-center justify-center h-screen overflow-hidden '>
                <CameraFeed modelPath="/models/web_model/model.json" />
            </div>
            <div className="absolute top-0 right-0 p-10">
                <CubeLayout cubeArray={cubeStateArray} />
            </div>

            <div className="absolute bottom-0 w-full flex justify-center p-40">
                <button onClick={handleCapture} className="bg-white text-[1vw] uppercase font-ppneue-montreal font-medium py-4 px-14">Click Button to Capture a Cube surface</button>
            </div>
            <Footer />
        </main>
    );
}

// function captureImageFromCameraFeed() {
//     // Implement this function to capture an image from the CameraFeed component
//     // This is a placeholder for the actual implementation
//     return 'data:image/png;base64,iVBORw0...'; // Return the base64 image data
// }
