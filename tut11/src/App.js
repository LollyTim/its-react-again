import React from "react";

import { useState } from "react";
import ColorBox from "./Colorbox";

const App = () => {
  const [bgColor, setBgColor] = useState("");

  return (
    <div className="App">
      <ColorBox bgColor={bgColor} setBgColor={setBgColor} />
    </div>
  );
};

export default App;
