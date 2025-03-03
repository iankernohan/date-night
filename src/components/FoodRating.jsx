import { Rating } from "@mui/material";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";

function FoodRating({ type, value = 5, id, onChange, required }) {
  if (type === "read") {
    return (
      <Rating
        id={id}
        name="read-only"
        readOnly
        value={value}
        max={10}
        size="large"
        icon={<DinnerDiningIcon />}
        emptyIcon={""}
        sx={{ color: "#ff0000" }}
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
      size="large"
      icon={<DinnerDiningIcon />}
      emptyIcon={<DinnerDiningOutlinedIcon />}
      sx={{ color: "#ff0000" }}
    />
  );
}

export default FoodRating;
