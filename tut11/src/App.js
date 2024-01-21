import React from "react";
import { useState } from "react";
import ColorBox from "./Colorbox";

const App = () => {
  const [bgColor, setBgColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [TextColor, setTextColor] = useState(true);

  return (
    <div className="App">
      <ColorBox
        bgColor={bgColor}
        setBgColor={setBgColor}
        hexValue={hexValue}
        setHexValue={setHexValue}
        TextColor={TextColor}
        setTextColor={setTextColor}
      />
    </div>
  );
};

export default App;
