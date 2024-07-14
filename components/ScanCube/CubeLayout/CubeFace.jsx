

// CubeFace component is used to display the cube face with 3x3 grid layout.                 
const CubeFace = (props) => {
    return (
        <div className={`w-20 h-20 grid grid-cols-3  ${props.customClass} gap-2 text-sm`}>
            {
                props.face.map((color, index) => {
                    return (
                        <div key={index} className={`flex justify-center item-center text-white ${color || 'bg-gray-700'}`}>
                            {color ?  "\u00A0" : "?"}
                        </div>
                    )}
                )}
        </div>
    )
}

export default CubeFace;


 