import { useContext } from "react";

export const Cart = () => {
  const value = useContext();

  return (
    <nav>
      <h5>No. items in cart : {}</h5>
    </nav>
  );
};
