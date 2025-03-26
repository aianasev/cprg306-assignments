"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9/shopping-list");
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/[\d,🍗\s]+/g, "").toLowerCase().trim();
    setSelectedItemName(cleanedItemName);
  };

  if (!user) return <p>Redirecting...</p>; 

  return (
    <main className="flex p-4 bg-green-300">
      <div className="w-1/2 pr-4">
        <h1 className="bg-green-400 font-bold text-xl text-yellow-200 py-10 text-center">
          Shopping List
        </h1>

        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 pl-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

