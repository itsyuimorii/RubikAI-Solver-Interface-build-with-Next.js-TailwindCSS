"use client"
import CubeFace from "@/components/ScanCube/CubeLayout/cubeFace";

//CubeLayout is a component that takes in a cubeArray prop and maps over it to render a CubeFace component for each face of the cube.
const CubeLayout = (props) => {
    return ( 
        <div className="grid grid-cols-4 gap-4 w-96">
            {props.cubeArray.map((face, index) => {
                // console.log(index, "index of face")
                if (index === 0 || index === 5) {
                    return (
                          <div key={index} className="grid grid-cols-subgrid gap-4 col-span-4">
                            <CubeFace  face={face} customClass="col-start-2" />
                        </div>
                    )
                }
                return (
                <CubeFace key={index} face={face} />
                )
            })}
        </div>
     );
}
 
export default CubeLayout;              
 