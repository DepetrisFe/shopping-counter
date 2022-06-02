import { Grid } from "@mui/material";
import { useStyles } from "./styles";
import ItemRow from "../../Components/ItemRow";

const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <ItemRow />
    </Grid>
  );
};

export default Home;
