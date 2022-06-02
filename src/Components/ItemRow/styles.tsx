import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    marginTop: "20px",
  },
  main: {
    display: "flex",
    alignItems: "center",
    padding: "5px",
  },
  fieldContainer: {
    display: "flex",
    position: "relative",
  },
  statusGreen: {
    position: "absolute",
    height: "100%",
    width: "6px",
    zIndex: "1",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
    backgroundColor: "#41bf63",
  },
  statusRed: {
    position: "absolute",
    height: "100%",
    width: "6px",
    zIndex: "1",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
    backgroundColor: "#e35b5b",
  },
  productField: {
    maxWidth: "150px",
  },
  amountField: {
    maxWidth: "80px",
    margin: "0px 10px",
  },
  counterContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "30px",
    width: "90px",
  },
  removeButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "0px",
    backgroundColor: "#e35b5b",
    height: "100%",
    width: "30px",
    boxShadow: "inset -1px -1px 6px 2px rgba(0,0,0,0.5)",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "#ed6666",
    },
    "&:active": {
      boxShadow: "inset 1px 1px 6px 2px rgba(0,0,0,0.5)",
    },
  },
  addButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "0px",
    backgroundColor: "#41bf63",
    height: "100%",
    width: "30px",
    boxShadow: "inset -1px -1px 6px 2px rgba(0,0,0,0.5)",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "#49cc6d",
    },
    "&:active": {
      boxShadow: "inset 1px 1px 6px 2px rgba(0,0,0,0.5)",
    },
  },
  addRowButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "3px",
    height: "30px",
    width: "30px",
    marginLeft: "5px",
  },
  styledIcon: {
    color: "white",
  },
  totalContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "0px 10px",
    margin: "15px 5px",
    borderRadius: "4px",
    border: "1px solid black",
  },
});
