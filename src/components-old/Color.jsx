import { useState } from "react";

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Current Color: {color}</p>
            </div>
            <h2>Select Color:</h2>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker