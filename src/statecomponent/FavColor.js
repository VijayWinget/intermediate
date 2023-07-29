import React, { useState } from 'react';

function FavColor() {
    const [color, setColor] = useState("Red");

    const changeColor = () => {
        setColor("Blue");
    };

    return (
        <>
            <h1>New Component My Fav Color is {color}</h1>
            <button onClick={changeColor}>Change</button>
        </>
    );
}

export default FavColor;
