"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: `${Date.now()}-${Math.random()}`,
      name,
      quantity,
      category,
    };
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="bg-yellow-200 p-6 flex items-center justify-center">
      <div className="p-6 bg-white rounded">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium text-green-500">
              Item:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded-lg p-2 text-green-500"
              placeholder="Enter item name"
            />
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="bg-blue-300 text-white rounded-lg px-4 py-2 disabled:opacity-50"
            >
              -
            </button>
            <span className="text-xl text-black">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="bg-pink-300 rounded-lg px-4 py-2 disabled:opacity-50"
            >
              +
            </button>
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="font-medium text-green-500">
              Category:
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded p-2 text-black bg-white border border-green-500"
            >
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white rounded-lg px-6 py-2 mt-4 hover:bg-green-600"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}


