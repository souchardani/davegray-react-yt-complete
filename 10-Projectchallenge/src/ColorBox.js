const ColorBox = ({ color }) => {
  const handleStyle = () => {};
  return (
    <div style={{ backgroundColor: color }} className="color-box">
      {color ? color : "Empty Value"}
    </div>
  );
};

export default ColorBox;
