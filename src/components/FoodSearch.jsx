import { TextField } from "@mui/material";
import { makeWhite } from "../Help/helpers";

export default function FoodSearch({ search, setSearch }) {
  return (
    <div className="m-auto w-fit my-8">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        color="primary"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={makeWhite}
      />
    </div>
  );
}
