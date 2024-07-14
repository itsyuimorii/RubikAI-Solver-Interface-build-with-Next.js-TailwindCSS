// import CameraFeed from "@/components/CameraFeed";
'use client';

import CameraFeed from "@/components/CameraFeed";
import Footer from '@/components/Footer';

export default function ScanCube() {
    //make an array of 6 elements, each with 9 null values

    const cubeArray = [
        [null, null, null, null, "white", null, null, null, null],
        [null, null, null, null, "orange", null, null, null, null],
        [null, null, null, null, "blue", null, null, null, null],
        [null, null, null, null, "red", null, null, null, null],
        [null, null, null, null, "green", null, null, null, null],
        [null, null, null, null, "yellow", null, null, null, null],
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
                <div className="grid grid-cols-4 gap-4">
                    <div className="grid grid-cols-subgrid gap-4 col-span-4">

                        <div className="w-20 h-20 col-start-2 grid grid-cols-3 gap-2">
                            <div className=" bg-white"></div>
                            <div className=" bg-white"></div>
                            <div className=" bg-white"></div>
                            <div className=" bg-white"></div>
                            <div className=" bg-white"></div>
                            <div className=" bg-white"></div>
                            <div className=" bg-white"></div>
                            <div className=" bg-white"></div>
                            <div className=" bg-white"></div>
                        </div>
                    </div>
                    <div className="w-20  h-20 grid grid-cols-3 gap-2">
                        <div className=" bg-orange-500"></div>
                        <div className=" bg-orange-500"></div>
                        <div className=" bg-orange-500"></div>
                        <div className=" bg-orange-500"></div>
                        <div className=" bg-orange-500"></div>
                        <div className=" bg-orange-500"></div>
                        <div className=" bg-orange-500"></div>
                        <div className=" bg-orange-500"></div>
                        <div className=" bg-orange-500"></div>
                    </div>
                    <div className="w-20 h-20   grid grid-cols-3 gap-2">
                        <div className=" bg-blue-500"></div>
                        <div className=" bg-blue-500"></div>
                        <div className=" bg-blue-500"></div>
                        <div className=" bg-blue-500"></div>
                        <div className=" bg-blue-500"></div>
                        <div className=" bg-blue-500"></div>
                        <div className=" bg-blue-500"></div>
                        <div className=" bg-blue-500"></div>
                        <div className=" bg-blue-500"></div>
                    </div>
                    <div className="w-20 h-20   grid grid-cols-3 gap-2">
                        <div className=" bg-red-500"></div>
                        <div className=" bg-red-500"></div>
                        <div className=" bg-red-500"></div>
                        <div className=" bg-red-500"></div>
                        <div className=" bg-red-500"></div>
                        <div className=" bg-red-500"></div>
                        <div className=" bg-red-500"></div>
                        <div className=" bg-red-500"></div>
                        <div className=" bg-red-500"></div>
                    </div>
                    <div className="w-20 h-20 grid grid-cols-3 gap-2">
                        <div className=" bg-green-500"></div>
                        <div className=" bg-green-500"></div>
                        <div className=" bg-green-500"></div>
                        <div className=" bg-green-500"></div>
                        <div className=" bg-green-500"></div>
                        <div className=" bg-green-500"></div>
                        <div className=" bg-green-500"></div>
                        <div className=" bg-green-500"></div>
                        <div className=" bg-green-500"></div>
                    </div>
                    <div className="grid grid-cols-subgrid gap-4 col-span-4">
                        <div className="w-20 h-20 grid grid-cols-3 col-start-2 gap-2">
                            <div className=" bg-yellow-500"></div>
                            <div className=" bg-yellow-500"></div>
                            <div className=" bg-yellow-500"></div>
                            <div className=" bg-yellow-500"></div>
                            <div className=" bg-yellow-500"></div>
                            <div className=" bg-yellow-500"></div>
                            <div className=" bg-yellow-500"></div>
                            <div className=" bg-yellow-500"></div>
                            <div className=" bg-yellow-500"></div>
                        </div></div>
                </div>
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
