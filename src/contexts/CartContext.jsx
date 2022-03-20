import { createContext } from "react";

const CartContext = createContext(); //create box

export const CartContextProvider = ({ children }) => {
  return <CartContext.Provider value={0}>{children}</CartContext.Provider>;
};
