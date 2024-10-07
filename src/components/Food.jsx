import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFoodData } from "../../firebase/firebaseOperations";
import { FaGlassCheers } from "react-icons/fa";
import FoodForm from "./FoodForm";
import AddButton from "./AddButton";
import FoodItems from "./FoodItems";
import FoodSearch from "./FoodSearch";

function Food() {
  const [foodData, setFoodData] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filteredData, setFilteredData] = useState(foodData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function handleFilter() {
      if (search.length > 2) {
        setFilter(true);
        const filtered = foodData.filter((data) =>
          data.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filtered);
      } else {
        setFilter(false);
      }
    }
    handleFilter();
  }, [search, foodData]);

  useEffect(() => {
    async function fetchFoodData() {
      const data = await getFoodData();
      setFoodData(data.reverse());
    }
    fetchFoodData();
  }, []);

  return (
    <main>
      {formOpen ? (
        <FoodForm setFoodData={setFoodData} setFormOpen={setFormOpen} />
      ) : (
        <AddButton setFormOpen={setFormOpen} />
      )}
      <FoodSearch search={search} setSearch={setSearch} />
      <FoodItems
        foodData={foodData}
        filter={filter}
        filteredData={filteredData}
      />
      <Link
        to={"/"}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        <FaGlassCheers />
      </Link>
    </main>
  );
}

export default Food;
