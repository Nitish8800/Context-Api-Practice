import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <h5>No. items in cart : {cart}</h5>
    </nav>
  );
};
