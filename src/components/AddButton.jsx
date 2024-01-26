import { Button } from "@mui/material";

function AddButton({ setFormOpen }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => setFormOpen(true)}
      sx={{ display: "flex", margin: " 2rem auto", fontSize: "1.5rem" }}
    >
      +
    </Button>
  );
}

export default AddButton;
