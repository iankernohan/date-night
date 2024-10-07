import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { addFoodData, getFoodData } from "../../firebase/firebaseOperations";
import CloseButton from "./CloseButton";
import { makeWhite } from "../Help/helpers";

function FoodForm({ setFormOpen, setFoodData }) {
  const [foodName, setFoodName] = useState("");
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [foodTime, setFoodTime] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [directions, setDirections] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: foodName,
      time: foodTime,
      ingredients: foodIngredients,
      directions,
    };
    await addFoodData(data);
    const updatedData = await getFoodData();
    setFoodData(updatedData.reverse());
    setFormOpen(false);
  }

  function handleUpdateIngredients() {
    if (ingredientName.length > 0 && ingredientAmount.length > 0) {
      setFoodIngredients((curr) => [
        ...curr,
        { ingredient: ingredientName, amount: ingredientAmount },
      ]);
      setIngredientName("");
      setIngredientAmount("");
    } else {
      console.log("nothing to add");
    }
  }

  return (
    <form
      className="bg-zinc-700 relative grid justify-center w-[75%] mx-auto rounded-lg gap-5 mt-5 shadow-md p-3 md:gap-20"
      onSubmit={handleSubmit}
    >
      <CloseButton setFormOpen={setFormOpen} />
      <Box className="flex flex-col items-center gap-4">
        <TextField
          required
          id="standard-basic"
          label="Name"
          variant="standard"
          color="primary"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          sx={makeWhite}
        />
        <TextField
          required
          id="filled-number"
          label="Cook Time (mins.)"
          variant="standard"
          type="number"
          color="primary"
          value={foodTime}
          onChange={(e) => setFoodTime(e.target.value)}
          sx={makeWhite}
        />
        <Box>
          <TextField
            label="Ingredient"
            variant="standard"
            type="standard"
            color="primary"
            value={ingredientName}
            onChange={(e) => setIngredientName(e.target.value)}
            sx={makeWhite}
          />
          <TextField
            label="Measurement"
            variant="standard"
            type="standard"
            color="primary"
            value={ingredientAmount}
            onChange={(e) => setIngredientAmount(e.target.value)}
            sx={makeWhite}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateIngredients}
        >
          Add Ingredient
        </Button>
        <Box>
          {foodIngredients.length > 0 ? (
            foodIngredients.map((ing, index) => (
              <div key={index} className="flex justify-center gap-3">
                <span>
                  {ing.ingredient} - {ing.amount}
                </span>
              </div>
            ))
          ) : (
            <div className="font-bold tracking-wide text-[1.5rem]">
              Start Adding Some Ingredients!
            </div>
          )}
        </Box>
        <TextField
          label="Directions"
          variant="standard"
          type="standard"
          color="primary"
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
          sx={makeWhite}
        />
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

export default FoodForm;
