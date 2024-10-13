// import CameraFeed from "@/components/CameraFeed";
// TODO: adding instrsuctions to the user
// 1. Promp info: Flip the cube in the right way.
// 2. if the face is not right, you can keep the same postion and click the button again.
// 3. 
'use client';

import Footer from '@/components/Footer';
import CameraFeed from "@/components/CameraFeed";
import CubeLayout from '@/components/ScanCube/CubeLayout';
import { useSelector, useDispatch } from 'react-redux';
import { setCubeFace } from '@/components/Store/cubeStateReducer';
import store from '@/components/Store/store';

export default function ScanCube() {
    //make an array of 6 elements, each with 9 null values
    const { cubeStateArray } = useSelector(state => state.cubeState);
    const dispatch = useDispatch();


    // console.log('cubeStateArray', cubeStateArray);

    const handleCapture = () => {
        const { predictionsArray } = store.getState().predictions;
        console.log('unsorted', predictionsArray);


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
        console.log("Click Button To Capture Surface => Sorted", sortedPredictionsArray);


        const faceIndex = 0;
        //TODO validate predictions
        // 1. ensure only 1 face is visible
        // 2. ensure that only 9 tiles is visible
        // 3. (optional all 9 tiles are within the face detetion)
        let newTiles = sortedPredictionsArray.map(prediction => prediction.class);
        // TODO there should only be 1 face here
        const faces = newTiles.filter(tile =>
            tile.includes('face'));

        // TODO validate exactly 9 tiles are visible
        newTiles = newTiles.filter(tile => tile.includes('tile'));
        console.log('newTiles', newTiles);
        console.log('faces', faces);
        console.log('newTiles', newTiles);
        dispatch(setCubeFace(newTiles));
    };
    return (
        <main className="relative h-screen pt-20">
            <div className='flex flex-col items-center justify-start'>
                <div className='flex flex-row items-center gap-10'>
                    <div className='border-4 border-custom-green'>
                        <CameraFeed modelPath="/models/web_model/model.json" />
                    </div>
                    <div className='flex flex-col gap-20'>
                        <div>
                            <CubeLayout cubeArray={cubeStateArray} />
                        </div>
                    </div>

                </div>
                <div className=''>
                    <p className='text-white'>

                    </p>
                </div>
                <div className="w-full flex justify-center p-32">
                    <button onClik={handleCapture} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs uppercase font-ppneue-montreal font-  text-gray-900 rounded-lg group bg-gradient-to-br bg-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span class="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Click Button to Capture a Cube surface
                        </span>
                    </button>


                </div>
            </div >
            <Footer />
        </main >
    );
}

// function captureImageFromCameraFeed() {
//     // Implement this function to capture an image from the CameraFeed component
//     // This is a placeholder for the actual implementation
//     return 'data:image/png;base64,iVBORw0...'; // Return the base64 image data
// }
