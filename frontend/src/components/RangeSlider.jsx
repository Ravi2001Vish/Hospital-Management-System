import React, { useState } from 'react';


const RangeSlider = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="range-slider">
            <span>MILEAGE</span>
            <input
                type="range"
                min="0"
                max="310000"
                value={value}
                onChange={handleChange}
                className="slider"
                id="myRange"
            />
            <div style={{display:"flex", alignItems:"center" ,justifyContent:"space-evenly"}}>
            <div className="value">{value}</div>
            <div className="value">310000</div>
            </div>
      

        </div>
    );
};

export default RangeSlider;
