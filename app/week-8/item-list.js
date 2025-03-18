"use client";

import { useState, useEffect } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [groupByCategory, setGroupByCategory] = useState(false);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayItems(sortedItems);
  }, [items]);

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(',')[0].replace(/[^a-zA-Z0-9 ]/g, '').trim();
    if (onItemSelect) {
      onItemSelect(cleanedItemName);
    }
  };

  const renderItems = () => {
    if (groupByCategory) {
      const grouped = Object.entries(
        displayItems.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = [];
          acc[item.category].push(item);
          return acc;
        }, {})
      );

      return grouped.map(([category, categoryItems]) => (
        <div key={category} className="mb-4 w-full">
          <h2 className="text-xl font-bold capitalize text-center text-green-400">
            {category}
          </h2>
          <div className="flex flex-wrap justify-center">
            {categoryItems.map((item) => (
              <Item key={item.id} {...item} onSelect={handleItemSelect} />
            ))}
          </div>
        </div>
      ));
    }

    return displayItems.map((item) => (
      <Item key={item.id} {...item} onSelect={handleItemSelect} />
    ));
  };

  return (
    <div className="p-4 bg-yellow-200 shadow rounded-lg">
      <div className="flex justify-center space-x-2 mb-4">
        <h2 className="text-xl font-bold text-green-400">Sort By:</h2>
        <button
          className="px-4 py-2 bg-pink-300 text-white rounded"
          onClick={() => setGroupByCategory(false)}
        >
          Name
        </button>
        <button
          className="px-4 py-2 bg-blue-300 text-white rounded"
          onClick={() => setGroupByCategory(true)}
        >
          Category
        </button>
      </div>
      <div className="flex flex-wrap justify-center">{renderItems()}</div>
    </div>
  );
}





