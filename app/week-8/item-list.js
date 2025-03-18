"use client";
import { useEffect, useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [groupByCategory, setGroupByCategory] = useState(false);
  const [displayItems, setDisplayItems] = useState([]);
  useEffect(() => {
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayItems(sortedItems);
  }, [items]);

  const sortByName = () => {
    const sorted = [...displayItems].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayItems(sorted);
    setGroupByCategory(false);
  };

  const sortByCategory = () => {
    const sorted = [...displayItems].sort((a, b) => a.category.localeCompare(b.category));
    setDisplayItems(sorted);
    setGroupByCategory(false);
  };

  const groupItemsByCategory = () => {
    setGroupByCategory(true);
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
              <Item key={item.id} {...item} />
            ))}
          </div>
        </div>
      ));
    }

    return displayItems.map((item) => <Item key={item.id} {...item} />);
  };

  return (
    <div className="p-4 bg-yellow-200 shadow rounded-lg">
      <div className="flex justify-center space-x-2 mb-4">
        <h2 className="text-xl font-bold text-green-400">Sort By:</h2>
        <button
          className="px-4 py-2 bg-pink-300 text-white rounded"
          onClick={sortByName}
        >
          Name
        </button>
        <button
          className="px-4 py-2 bg-blue-300 text-white rounded"
          onClick={sortByCategory}
        >
          Category
        </button>
        <button
          className="px-4 py-2 bg-purple-400 text-white rounded"
          onClick={groupItemsByCategory}
        >
          Grouped Category
        </button>
      </div>
      <div className="flex flex-wrap justify-center">{renderItems()}</div>
    </div>
  );
}


