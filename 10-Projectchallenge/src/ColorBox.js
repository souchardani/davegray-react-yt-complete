const ColorBox = ({ color, HexColor, darkColor }) => {
  const handleStyle = () => {};
  return (
    <div
      style={{ backgroundColor: color, color: darkColor ? "#000" : "#FFF" }}
      className="color-box"
    >
      <p>{color ? color : "Empty Value"}</p>
      <p>{HexColor ? HexColor : null}</p>
    </div>
  );
};

export default ColorBox;
