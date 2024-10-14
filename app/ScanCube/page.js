// import CameraFeed from "@/components/CameraFeed";
// TODO: adding instrsuctions to the user
// 1. Promp info: Flip the cube in the right way.
// 2. if the face is not right, you can keep the same postion and click the button again.
// 3. 
'use client';

import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import CameraFeed from "@/components/CameraFeed";
import CubeLayout from '@/components/ScanCube/CubeLayout';
import { useSelector, useDispatch } from 'react-redux';
import { setCubeFace } from '@/components/Store/cubeStateReducer';
import { setMessage } from '@/components/Store/messageReducer';
import store from '@/components/Store/store';
import { INSTRUCTION_MESSAGES } from '@/components/constant';

export default function ScanCube() {
    //make an array of 6 elements, each with 9 null values
    const { cubeStateArray } = useSelector(state => state.cubeState);
    const [faceIndex, setFaceIndex] = useState(0);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    // console.log('cubeStateArray', cubeStateArray);

    useEffect(() => {
        if (faceIndex === 0) {
            dispatch(setMessage(INSTRUCTION_MESSAGES[0]));
        }
    }, [faceIndex, dispatch]);

    const handleCapture = () => {
        const { predictionsArray } = store.getState().predictions;
        // console.log('unsorted', predictionsArray);
        const marginOfError = 30; // Adjust this margin as needed
        let sortedPredictionsArray = [...predictionsArray].sort((firstTile, secondTile) => {
            const yDiff = firstTile.bbox[1] - secondTile.bbox[1];
            if (Math.abs(yDiff) <= marginOfError) {
                // If y difference is within the margin of error, compare x
                return firstTile.bbox[0] - secondTile.bbox[0];
            }
            // Otherwise, sort by y
            return yDiff;
        });
        // console.log("Click Button To Capture Surface => Sorted", sortedPredictionsArray);

        //TODO validate predictions
        // 1. ensure only 1 face is visible
        // 2. ensure that only 9 tiles is visible
        // 3. (optional all 9 tiles are within the face detetion)
        let newTiles = sortedPredictionsArray.map(prediction => prediction.class);
        //TODO there should only be 1 face here
        const faces = newTiles.filter(tile =>
            tile.includes('face'));


        //TODO validate exactly 9 tiles are visible
        newTiles = newTiles.filter(tile => tile.includes('tile'));
        // console.log('newTiles', newTiles);
        // console.log('faces', faces);
        // console.log('newTiles', newTiles);
        dispatch(setCubeFace(newTiles));


        //Increment the Index each time I run the handleCapture function
        setFaceIndex(prevIndex => prevIndex + 1);
        dispatch(setMessage(INSTRUCTION_MESSAGES[faceIndex + 1]));



    };
    return (
        <main className="relative h-screen pt-14">
            <div className='flex flex-col items-center justify-start'>
                <div className='flex flex-row items-center gap-10'>
                    <div className='border-4 border-custom-green'>
                        <CameraFeed modelPath="/models/web_model/model.json" />
                    </div>
                    <div className='flex flex-col gap-20'>
                        <div className='w-64 h-64'>
                            <CubeLayout cubeArray={cubeStateArray} />
                        </div>
                    </div>

                </div>
                <div className='pt-4'>
                    <p className='uppercase font-ppneue-montreal font-thin text-xs text-gray-500'>
                        <span className='font-thin'>INSTRUCTION_MESSAGES:
                            Please follow the instruction to place the cube</span><br />
                        {message}
                    </p>
                </div>
                <div className="w-full flex justify-center p-24">
                    <button onClick={handleCapture} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs uppercase font-ppneue-montreal font-light *:text-gray-900 rounded-lg group bg-gradient-to-br bg-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span className="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Click Button to Capture a Cube surface
                        </span>

                    </button>
                    {/* TODO: Reset button */}

                </div>
            </div >
            <Footer />
        </main >
    );
}

// function captureImageFromCameraFeed() {
//     // Implement this function to capture an image from the CameraFeed component
//     // This is a placeholder for the actual implementation
//     return 'data:image /png;base64,iVBORw0...'; // Return the base64 image data
// }
