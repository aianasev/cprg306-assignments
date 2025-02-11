"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => 
  {
    setQuantity(quantity + 1);
  };

  const decrement = () => 
  {
    setQuantity(quantity - 1);
  };

  return (
    <div className="p-4 border rounded-lg text-center">
      <div className="flex items-center space-x-4 px-3">
      <h1 className="text-xl font-bold">{quantity}</h1>
      <button onClick={increment} disabled={quantity === 20} className="bg-pink-300 rounded-lg p-2 disabled:opacity-20">+</button>
      <button onClick={decrement} disabled={quantity === 1} className="bg-blue-300 text-white rounded-lg p-2 disabled:opacity-20 ">- </button>
      </div>
    </div>
  );
}