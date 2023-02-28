import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => {
    setOpenModal(true);
  };
  const onCloseModal = () => {
    console.log("closing");
    setOpenModal(false);
  };
  return (
    <CartProvider>
      {openModal && <Cart onCloseModal={onCloseModal} />}
      <Header onShowModal={onOpenModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
