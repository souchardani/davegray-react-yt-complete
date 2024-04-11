import ColorBox from "./ColorBox";
import InputBox from "./InputBox";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <ColorBox color={color} />
      <InputBox color={color} setColor={setColor} />
    </div>
  );
}

export default App;
