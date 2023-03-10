import React from "react";
import Button from "react-bootstrap/Button";

//function basically takes in 2 props - name and fn ---
// Name acts as the text that is displayed in the button - if there is no name in the props it displayes Default Button text
// fn is a placeholder for the function the button will perform on click - if there is no fn in the pros, the on click function is set as null
function CustomButton({ name, OnClickFunction = () => {} }) {
  return (
    <div>
      <Button
        variant="dark"
        size="lg"
        className="rounded-0 px-5 w-100"
        onClick={OnClickFunction}
      >
        <span className="fs-4">{name}</span>
      </Button>
    </div>
  );
}

export default CustomButton;
