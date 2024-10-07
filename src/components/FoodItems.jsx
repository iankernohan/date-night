import { useState } from "react";
import FoodItem from "./FoodItem";

export default function FoodItems({ foodData, filteredData, filter }) {
  return (
    <section className="flex flex-col gap-5">
      {filter
        ? filteredData.map((item, index) => (
            <FoodItem food={item} key={index} />
          ))
        : foodData.map((item, index) => <FoodItem food={item} key={index} />)}
    </section>
  );
}
