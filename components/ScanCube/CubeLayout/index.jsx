import CubeFace from "@/components/ScanCube/CubeLayout/cubeFace";

//CubeLayout is a component that takes in a cubeArray prop and maps over it to render a CubeFace component for each face of the cube.
const CubeLayout = (props) => {
    return ( 
        <div className="grid grid-cols-4 gap-4">
            {props.cubeArray.map((face, index) => {
                if (index === 0 || index === 5) {
                    return (
                        <div className="grid grid-cols-subgrid gap-4 col-span-4">
                            <CubeFace face={face} customClass="col-start-2" />
                        </div>
                    )
                }
                return (
                    <CubeFace face={face} />
                )
            })}
        </div>
     );
}
 
export default CubeLayout;              

{/* <div className="grid grid-cols-4 gap-4">
                    <div className="grid grid-cols-subgrid gap-4 col-span-4">


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
                </div> */}