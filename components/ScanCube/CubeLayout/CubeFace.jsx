
const tileColor = {
    white_tile: 'bg-white',
    red_tile:  red_tile,
    green_tile: 'bg-green-500',
    blue_tile: 'bg-blue-500',
    orange_tile: 'bg-orange-500',
    yellow_tile: 'bg-yellow-500',
}

// CubeFace component is used to display the cube face with 3x3 grid layout.                 
const CubeFace = (props) => {
    return (
        <div className={`w-20 h-20 grid grid-cols-3  ${props.customClass} gap-2 text-sm`}>
            {
                props.face.map((tile_name, index) => {
                    return (
                        <div key={index} className={`flex justify-center item-center text-gray-600 ${tileColor[tile_name]|| 'bg-grey-100'}`}>
                            {tile_name ?  "\u00A0" : "x"}
                        </div>
                    )}
                )}
        </div>
    )
}

export default CubeFace;


 