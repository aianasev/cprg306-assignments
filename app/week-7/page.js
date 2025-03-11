"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <main>
      <h1 className="bg-green-400 font-bold text-xl text-yellow-200 flex flex-col items-center py-10">
        Shopping List
      </h1>
      <div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
