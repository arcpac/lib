import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./CartItems.module.css";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onRemoveHandler = (id) => {
    console.log("remove item");
    cartCtx.removeItem(id);
  };
  const onAddHandler = (item) => {
    console.log("add item");
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((book) => (
        <CartItem
          key={book.id}
          title={book.title}
          price={book.price}
          amount={book.amount}
          onRemove={onRemoveHandler.bind(null, book.id)}
          onAdd={onAddHandler.bind(null, book)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
        {hasItems && <button>Order</button>}
      </div>
    </Modal>
  );
}
export default Cart;
