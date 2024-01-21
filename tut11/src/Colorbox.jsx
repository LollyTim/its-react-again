import React from "react";

const ColorBox = ({ bgColor, setBgColor }) => {
  return (
    <div>
      <div className="colorbox" style={{ backgroundColor: bgColor }}>
       <p>{bgColor ? <p> {bgColor}</p> : <p>Empty Text</p>}</p>
      </div>
      <input
        className="addcolorinput"
        type="text"
        id="search"
        role="searchbox"
        placeholder="Add color name"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
    </div>
  );
};

export default ColorBox;