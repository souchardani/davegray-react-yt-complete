import ColorBox from "./ColorBox";
import InputBox from "./InputBox";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [HexColor, setHexColor] = useState("");
  const [darkColor, setDarkColor] = useState(true);

  return (
    <div className="App">
      <ColorBox color={color} HexColor={HexColor} darkColor={darkColor} />
      <InputBox
        color={color}
        setColor={setColor}
        setHexColor={setHexColor}
        setDarkColor={setDarkColor}
        darkColor={darkColor}
      />
    </div>
  );
}

export default App;
