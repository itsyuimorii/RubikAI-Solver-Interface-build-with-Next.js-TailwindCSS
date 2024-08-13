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
import 'react-toastify/dist/ReactToastify.css';

export default function ScanCube() {
    //make an array of 6 elements, each with 9 null values
    const { cubeStateArray } = useSelector(state => state.cubeState);
    const dispatch = useDispatch();


    // console.log('cubeStateArray', cubeStateArray);

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
        <main className="relative h-screen">
            <div className='flex flex-col items-center justify-start'>

                <div className='flex flex-row items-start gap-10'>
                    <div className='bg-black'>
                        <CameraFeed modelPath="/models/web_model/model.json" />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div>
                            <CubeLayout cubeArray={cubeStateArray} />
                        </div>
                        <div>
                            TODO CFOP INSTRUCTIONS HERE
                        </div>
                    </div>

                </div>
                <div className=''>
                    TODO message to user
                </div>
                <div className="w-full flex justify-center p-40">
                    <button onClick={handleCapture} className="bg-red-500 text-[1vw] uppercase font-ppneue-montreal font-medium py-4 px-14">Click Button to Capture a Cube surface</button>

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
