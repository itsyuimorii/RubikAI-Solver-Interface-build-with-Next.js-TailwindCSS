// import CameraFeed from "@/components/CameraFeed";
'use client';

import CameraFeed from "@/components/CameraFeed";
import Footer from '@/components/Footer';
import CubeLayout from '@/components/ScanCube/CubeLayout';

export default function ScanCube() {
    //make an array of 6 elements, each with 9 null values

    const cubeArray = [
        [null, null, null, null, "bg-white", null, null, null, null],
        [null, null, null, null, "bg-orange-500", null, null, null, null],
        [null, null, null, null, "bg-green-500", null, null, null, null],
        [null, null, null, null, "bg-red-500", null, null, null, null],
        [null, null, null, null, "bg-blue-500", null, null, null, null],
        [null, null, null, null, "bg-yellow-500", null, null, null, null],
    ]


    const handleCapture = () => {
        // Assuming the CameraFeed component has a method to capture an image
        // const image = captureImageFromCameraFeed();
        // setPhoto1(image);
    };

    return (
        <main className="relative h-screen">
            <div className='bg-black relative flex items-center justify-center h-screen overflow-hidden '>
                <CameraFeed modelPath="/models/web_model/model.json" />
            </div>
            <div className="absolute top-0 right-0 p-10">
                <CubeLayout cubeArray={cubeArray} />
            </div>

            <div className="absolute bottom-0 w-full flex justify-center p-40">
                <button onClick={handleCapture} className="bg-white text-[1vw] uppercase font-ppneue-montreal font-medium py-4 px-14">Click Button to Capture a Cube surface</button>
            </div>
            <Footer />
        </main>
    );
}

function captureImageFromCameraFeed() {
    // Implement this function to capture an image from the CameraFeed component
    // This is a placeholder for the actual implementation
    return 'data:image/png;base64,iVBORw0...'; // Return the base64 image data
}
