import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Cart = () => {
  const value = useContext(CartContext);

  return (
    <nav>
      <h5>No. items in cart : {}</h5>
    </nav>
  );
};
