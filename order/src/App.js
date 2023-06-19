import { useState } from "react";
import "./App.css";
import Books from "./components/Books/Books";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
// test
function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const cartShowHandler = () => {
    setIsCartShown(true);
  };
  const cartHideHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onClose={cartHideHandler} />}
      <Header onShowCart={cartShowHandler} />
      <main>
        <Books />
      </main>
    </CartProvider>
  );
}

export default App;
