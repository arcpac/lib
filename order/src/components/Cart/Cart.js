import Modal from "../UI/Modal";

function Cart(props) {
  const cartItems = (
    <ul>
      {[
        {
          id: "b1",
          title: "Alice in Wonderland",
          online: true,
          picture: "https://picsum.photos/48/48",
          price: 18.99,
        },
      ].map((book) => (
        <li>{book.title}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>123.00</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
