import { Button } from "@mui/material";

function CloseButton({ setFormOpen }) {
  return (
    <Button
      type="text"
      onClick={() => setFormOpen(false)}
      sx={{ position: "absolute", top: "10px", left: "0" }}
    >
      X
    </Button>
  );
}

export default CloseButton;
