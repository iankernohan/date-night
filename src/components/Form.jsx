import { useState } from "react";
import BeerRating from "./BeerRating";
import MovieRating from "./MovieRating";
import { Box, Button, TextField, Typography } from "@mui/material";
import { addData, getData } from "../../firebase/firebaseOperations";
import CloseButton from "./CloseButton";

function Form({ setFormOpen, setRatings }) {
  const [movie, setMovie] = useState("");
  const [ianMovie, setIanMovie] = useState(0);
  const [avaMovie, setAvaMovie] = useState(0);
  const [beverage, setBeverage] = useState("");
  const [ianBev, setIanBev] = useState(0);
  const [avaBev, setAvaBev] = useState(0);
  const [notes, setNotes] = useState("");

  async function handleSubmit(e) {
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
      date: new Date(),
    };
    await addData(data);
    const newData = await getData();
    setRatings(newData);
    setFormOpen(false);
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
            required
            id={"ian"}
            value={ianMovie}
            onChange={(e) => setIanMovie(e.target.value)}
          />
        </Box>
        <Box>
          <Typography>Ava</Typography>
          <MovieRating
            required
            id={"ava"}
            value={avaMovie}
            onChange={(e) => setAvaMovie(e.target.value)}
          />
        </Box>
      </Box>

      <Box className="flex flex-col items-center gap-4">
        <TextField
          required
          id="standard-basic"
          label="Beverage"
          variant="standard"
          color="secondary"
          value={beverage}
          onChange={(e) => setBeverage(e.target.value)}
          sx={{ input: { color: "white" } }}
        />
        <Box>
          <Typography>Ian</Typography>
          <BeerRating
            required
            id={"ianBev"}
            value={ianBev}
            onChange={(e) => setIanBev(e.target.value)}
          />
        </Box>
        <Box>
          <Typography>Ava</Typography>
          <BeerRating
            required
            id={"avaBev"}
            value={avaBev}
            onChange={(e) => setAvaBev(e.target.value)}
          />
        </Box>
      </Box>

      <Box className="mx-auto">
        <TextField
          multiline
          label="Notes"
          color="success"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          sx={{ input: { color: "white" } }}
        />
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

export default Form;
