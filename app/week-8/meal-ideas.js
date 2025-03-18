"use client";
import { useEffect, useState } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 bg-yellow-200 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-500">Meal Ideas</h2>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center space-x-4">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 rounded"
              />
              <p className="text-lg text-black">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
