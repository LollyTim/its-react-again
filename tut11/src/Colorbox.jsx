import React from "react";
import colorNames from "colornames";

const ColorBox = ({
  bgColor,
  setBgColor,
  hexValue,
  setHexValue,
  TextColor,
  setTextColor,
}) => {
  return (
    <div>
      <div
        className="colorbox"
        style={{ backgroundColor: bgColor, color: TextColor ? "#000" : "#fff" }}
      >
        <p>{bgColor ? bgColor : "Empty Text"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="Add Color Name:"></label>
        <input
          className="addcolorinput"
          type="text"
          id="search"
          role="searchbox"
          placeholder="Add color name"
          value={bgColor}
          onChange={(e) => {
            setBgColor(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
        />
      </form>
      <button
        type="button"
        className="togglebutton"
        onClick={() => setTextColor(!TextColor)}
      >
        Toggle Text Color
      </button>
    </div>
  );
};

export default ColorBox;