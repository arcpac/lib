function CartItem(props) {
  const price = `$${[props.price]}`;

  return (
    <li>
      <div>
        <h2>{props.title}</h2>
        <span>{price}</span>
        <span>x {props.amount}</span>
      </div>
      <div>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
