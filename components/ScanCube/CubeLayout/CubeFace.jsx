
                        
const CubeFace = (props) => {
    return (
        <div className="w-20 h-20 col-start-2 grid grid-cols-3 gap-2 text-sm">
            {
                props.face.map((color, index) => {
                    return (
                        <div key={index} className={`flex justify-center item-center ${color || 'bg-grey-500'}`}>
                            {color ? "&nbsp;" : "?"}
                        </div>
                    )}
                )}
        </div>
    )
}

export default CubeFace;


 