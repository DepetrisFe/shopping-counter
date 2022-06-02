import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { useStyles } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    localStorage.clear();
    window.location.reload();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.root}>
      <Button className={classes.button} onClick={() => setOpen(true)}>
        <DeleteIcon fontSize="large" className={classes.icon} />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>¿Seguro que deseas vaciar el carrito?</DialogTitle>
        <DialogActions>
          <Button onClick={handleConfirm}>Aceptar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Header;
