import { useRef, useState } from "react";
import Input from "../UI/input";

function BookItemForm(props) {
  const amountInputRef = useRef();
  
  const [amountIsValid, setAmountIsValid] = useState(true);

  const bookFormSubmit = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
    console.log("form submitted");
  };

  return (
    <form onSubmit={bookFormSubmit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add </button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
}

export default BookItemForm;
