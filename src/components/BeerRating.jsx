import { Rating } from "@mui/material";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";

function BeerRating({ type, value = 5, id, onChange }) {
  if (type === "read") {
    return (
      <Rating
        id={id}
        name="read-only"
        readOnly
        value={value}
        max={10}
        size="large"
        icon={<SportsBarIcon />}
        emptyIcon={<SportsBarOutlinedIcon />}
        sx={{ color: "#F28E1C" }}
      />
    );
  }

  return (
    <Rating
      id={id}
      name="controlled"
      onChange={onChange}
      value={value}
      max={10}
      precision={0.5}
      size="large"
      icon={<SportsBarIcon />}
      emptyIcon={<SportsBarOutlinedIcon />}
      sx={{ color: "#F28E1C" }}
    />
  );
}

export default BeerRating;
