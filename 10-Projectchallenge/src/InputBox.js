const InputBox = ({ color, setColor }) => {
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <input
      value={color}
      className="input-box"
      type="text"
      onChange={handleChange}
      placeholder="Add A Color Name"
    />
  );
};

export default InputBox;
