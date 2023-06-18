import { useContext } from "react";
import BookItemForm from "./BookItemForm";
import CartContext from "../../store/cart-context";

function BookItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>
        <p>{props.picture}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
      <div>
        <BookItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
}

export default BookItem;
