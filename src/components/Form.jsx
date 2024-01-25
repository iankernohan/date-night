import { useState } from "react";
import BeerRating from "./BeerRating";
import MovieRating from "./MovieRating";
import { Box, Button, TextField, Typography } from "@mui/material";
import { addData } from "../../firebase/firebaseOperations";

function Form() {
  const [movie, setMovie] = useState("");
  const [ianMovie, setIanMovie] = useState(5);
  const [avaMovie, setAvaMovie] = useState(5);
  const [beverage, setBeverage] = useState("");
  const [ianBev, setIanBev] = useState(5);
  const [avaBev, setAvaBev] = useState(5);
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      movie: {
        name: movie,
        ratings: {
          ian: ianMovie,
          ava: avaMovie,
        },
      },
      beverage: {
        name: beverage,
        ratings: {
          ian: ianBev,
          ava: avaBev,
        },
      },
      notes,
    };
    addData(data);
  }

  return (
    <form
      className="bg-zinc-700 flex flex-wrap justify-center w-[75%] mx-auto rounded-lg gap-5 mt-5 shadow-md p-3 md:gap-20"
      onSubmit={handleSubmit}
    >
      <Box className="flex flex-col items-center gap-4">
        <TextField
          id="standard-basic"
          label="Movie"
          variant="standard"
          color="primary"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          sx={{ input: { color: "white" } }}
        />
        <Box>
          <Typography>Ian</Typography>
          <MovieRating
            id={"ian"}
            value={ianMovie}
            onChange={(e) => setIanMovie(e.target.value)}
          />
        </Box>
        <Box>
          <Typography>Ava</Typography>
          <MovieRating
            id={"ava"}
            value={avaMovie}
            onChange={(e) => setAvaMovie(e.target.value)}
          />
        </Box>
      </Box>

      <Box className="flex flex-col items-center gap-4">
        <TextField
          id="standard-basic"
          label="Beverage"
          variant="standard"
          color="secondary"
          value={beverage}
          onChange={(e) => setBeverage(e.target.value)}
        />
        <Box>
          <Typography>Ian</Typography>
          <BeerRating
            id={"ianBev"}
            value={ianBev}
            onChange={(e) => setIanBev(e.target.value)}
          />
        </Box>
        <Box>
          <Typography>Ava</Typography>
          <BeerRating
            id={"avaBev"}
            value={avaBev}
            onChange={(e) => setAvaBev(e.target.value)}
          />
        </Box>
      </Box>

      <Box>
        <TextField
          multiline
          label="Notes"
          color="success"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

export default Form;
