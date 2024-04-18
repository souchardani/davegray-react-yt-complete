import Button from "./Button";

const ButtonList = ({ handleClick }) => {
  return (
    <div className="button-list">
      <Button handleClick={handleClick} data="users" buttonText={"Users"} />
      <Button handleClick={handleClick} data="posts" buttonText={"Posts"} />
      <Button
        handleClick={handleClick}
        data="comments"
        buttonText={"Comments"}
      />
    </div>
  );
};

export default ButtonList;
