"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [list, setList] = useState(items);
  const [groupByCategory, setGroupByCategory] = useState(false);

  const sortByName = () => {
    let newItems = items.toSorted((a, b) => {
      if (a.name > b.name)
        return 1;
      else if (a.name < b.name)
        return -1;
      else
        return 0;
      });

    setList(newItems);
    setGroupByCategory(false);
  };

  const sortByCategory = () => {
    let newItems = items.toSorted((a, b) => {
      if (a.category > b.category)
        return 1;
      else if (a.category < b.category)
        return -1;
      else
        return 0;
    });

    setList(newItems);
    setGroupByCategory(false);
  };

  const groupItemsByCategory = () => {
    setGroupByCategory(true);
  };

  return (
    <div className="p-4 bg-yellow-200 shadow rounded-lg">
      <div className="flex justify-center space-x-2 mb-4">
        <h2 className="text-xl font-bold text-green-400">Sort By:</h2>
        <button className="px-4 py-2 bg-pink-300 text-white rounded" onClick={sortByName}>
          Name
        </button>
        <button className="px-4 py-2 bg-blue-300 text-white rounded" onClick={sortByCategory}>
          Category
        </button>
        <button className="px-4 py-2 bg-purple-400 text-white rounded" onClick={groupItemsByCategory}>
          Grouped Category
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {groupByCategory
          ? Object.entries(
              list.reduce((acc, item) => {
                if (!acc[item.category]) acc[item.category] = [];
                acc[item.category].push(item);
                return acc;
              }, {})
            ).map(([category, items]) => (
              <div key={category} className="mb-4 w-full">
                <h2 className="text-xl font-bold capitalize text-center text-green-400">{category}</h2>
                <div className="flex flex-wrap justify-center">
                  {items.map((item) => (
                    <Item key={item.id} {...item} />
                  ))}
                </div>
              </div>
            ))
          : list.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </div>
  );
}


