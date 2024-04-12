import colorNames from "colornames";

const InputBox = ({
  color,
  setColor,
  darkColor,
  setHexColor,
  setDarkColor,
}) => {
  const handleChange = (e) => {
    setColor(e.target.value);
    setHexColor(colorNames(e.target.value));
  };

  return (
    <div className="input-section">
      <input
        value={color}
        className="input-box"
        type="text"
        onChange={handleChange}
        placeholder="Add A Color Name"
      />
      <button onClick={(e) => setDarkColor(!darkColor)}>
        Toggle dark color
      </button>
    </div>
  );
};

export default InputBox;
