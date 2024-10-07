import { Button } from "@mui/material";
import { useState } from "react";

export default function FoodItem({ food }) {
  const [showIngredients, setShowIngredients] = useState(false);

  function toggleIngredients() {
    setShowIngredients((curr) => !curr);
  }

  return (
    <div className="w-80 bg-slate-700 m-auto flex flex-col gap-8 items-center px-8 py-3 font-extralight shadow-lg">
      <div className="grid text-center gap-3">
        <h2 className="text-[2rem]">{food.name}</h2>
        <Button onClick={toggleIngredients} variant="contained" color="primary">
          {showIngredients ? "Hide Details" : "Show Details"}
        </Button>
      </div>
      {showIngredients && (
        <>
          <ul className="w-[70%]">
            {food.ingredients.map((ing, index) => (
              <li
                key={index}
                className="grid grid-cols-2 text-center border-b-2"
              >
                <p>{ing.ingredient}</p>
                <p>{ing.amount}</p>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="text-center">Directions</h3>
            <p>{food.directions}</p>
          </div>
        </>
      )}
    </div>
  );
}
