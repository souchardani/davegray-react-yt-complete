const Button = ({ buttonText, handleClick, data }) => {
  return <button onClick={() => handleClick(data)}>{buttonText}</button>;
};

export default Button;
