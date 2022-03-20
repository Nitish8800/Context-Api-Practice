import "./styles.css";
import { useState } from "react";
import { Button } from "./components/Body/Button";
import { Cart } from "./components/Navbar/Cart";

export default function App() {
  return (
    <div className="App">
      <Cart />
      <Button />
    </div>
  );
}
