import { Button } from "@mui/material";

function CloseButton({ setFormOpen }) {
  return (
    <Button
      type="text"
      onClick={() => setFormOpen(false)}
      sx={{ position: "absolute", bottom: "0", right: "0" }}
    >
      X
    </Button>
  );
}

export default CloseButton;
