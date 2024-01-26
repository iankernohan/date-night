import { Rating } from "@mui/material";

function MovieRating({ type, value = 5, id, onChange, required }) {
  if (type === "read") {
    return (
      <Rating
        id={id}
        name="read-only"
        readOnly
        value={value}
        max={10}
        emptyIcon={""}
        sx={{ color: "yellow" }}
      />
    );
  }

  return (
    <Rating
      required={required}
      id={id}
      name="controlled"
      onChange={onChange}
      value={value}
      max={10}
      precision={0.5}
      sx={{ color: "yellow" }}
    />
  );
}

export default MovieRating;
