"use client";

import { getItems, addItem } from "../_services/shopping-list-services";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-10/shopping-list");
      return;
    }

    async function loadItems() {
      const items = await getItems(user.uid);
      setItems(items);
    }

    loadItems();
  }, [user, router]);

  async function handleAddItem(newItem) {
    if (!user) return;
    const id = await addItem(user.uid, newItem);
    setItems(prevItems => [...prevItems, { id, ...newItem }]);
  }  

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

