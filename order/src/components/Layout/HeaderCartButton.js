import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);
  console.log(numberItems);
  return (
    <button onClick={props.onShowCart}>
      <span>
        <CartIcon />
      </span>
      <span>Your books</span>
      <span># {numberItems}</span>
    </button>
  );
}

export default HeaderCartButton;
