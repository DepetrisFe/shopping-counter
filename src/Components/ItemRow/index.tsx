import { useState, useEffect } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { useStyles } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

interface ItemType {
  name: string;
  amount: string;
  quantity: number;
}

const initialState = {
  name: "",
  amount: "",
  quantity: 0,
};

const ItemRow = (): JSX.Element => {
  const classes = useStyles();
  const [item, setItem] = useState<ItemType[]>([]);

  useEffect(() => {
    if (localStorage.getItem("products") !== null) {
      setItem(JSON.parse(localStorage.getItem("products") || ""));
    } else {
      setItem([initialState]);
    }
  }, []);

  const handleChange = (e: any, index: number) => {
    const arrItems = [...item];
    arrItems[index] = {
      ...arrItems[index],
      [e.target.name]: e.target.value,
    };
    setItem(arrItems);
    localStorage.setItem("products", JSON.stringify(arrItems));
  };

  const addItem = (index: number) => {
    const arrItems = [...item];
    if (arrItems[index].quantity < 99) {
      arrItems[index] = {
        ...arrItems[index],
        quantity: arrItems[index].quantity + 1,
      };
      setItem(arrItems);
      localStorage.setItem("products", JSON.stringify(arrItems));
    }
  };

  const removeItem = (index: number) => {
    const arrItems = [...item];
    if (arrItems[index].quantity > 0) {
      arrItems[index] = {
        ...arrItems[index],
        quantity: arrItems[index].quantity - 1,
      };
      setItem(arrItems);
      localStorage.setItem("products", JSON.stringify(arrItems));
    }
  };

  const addRow = (): void => {
    const arrItems = [...item];
    arrItems.push(initialState);
    setItem(arrItems);
    localStorage.setItem("products", JSON.stringify(arrItems));
  };

  const removeRow = (index: number) => {
    const arrItems = [...item];
    arrItems.splice(index, 1);
    setItem(arrItems);
    localStorage.setItem("products", JSON.stringify(arrItems));
  };

  const calculateTotal = () => {
    const total = item
      .map((i) => Number(i.amount) * i.quantity)
      .reduce((prev, curr) => prev + curr, 0);
    return total.toFixed(2);
  };

  return (
    <Grid className={classes.root}>
      {item.map((i, index) => {
        return (
          <Grid className={classes.main} key={index}>
            <Grid className={classes.fieldContainer}>
              <Grid
                className={
                  i.name && i.amount && i.quantity
                    ? classes.statusGreen
                    : classes.statusRed
                }
              />
              <Grid className={classes.productField}>
                <TextField
                  label="Producto"
                  name="name"
                  value={i.name}
                  autoComplete="off"
                  variant="outlined"
                  size="small"
                  onChange={(e) => handleChange(e, index)}
                />
              </Grid>
              <Grid className={classes.amountField}>
                <TextField
                  label="Precio"
                  name="amount"
                  value={i.amount}
                  autoComplete="off"
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="tel"
                  onChange={(e) => handleChange(e, index)}
                />
              </Grid>
            </Grid>
            <Grid className={classes.counterContainer}>
              <Grid
                className={classes.addButton}
                onClick={() => addItem(index)}
              >
                <AddIcon className={classes.styledIcon} />
              </Grid>
              <Typography variant="h5">{i.quantity}</Typography>
              <Grid
                className={classes.removeButton}
                onClick={() => removeItem(index)}
              >
                <RemoveIcon className={classes.styledIcon} />
              </Grid>
            </Grid>
            {index === item.length - 1 ? (
              <Grid className={classes.addRowButton} onClick={addRow}>
                <AddShoppingCartIcon />
              </Grid>
            ) : null}
            {index < item.length - 1 ? (
              <Grid
                className={classes.addRowButton}
                onClick={() => removeRow(index)}
              >
                <RemoveShoppingCartIcon />
              </Grid>
            ) : null}
          </Grid>
        );
      })}
      <Grid className={classes.totalContainer}>
        <Typography variant="h4">Total: {calculateTotal()} €</Typography>
      </Grid>
    </Grid>
  );
};

export default ItemRow;
