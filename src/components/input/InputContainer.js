import {
  Paper,
  makeStyles,
  Typography,
  fade,
  Collapse,
} from "@material-ui/core";
import React, { useState } from "react";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: "300px",
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    backgroundColor: "#ebecf0",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
  },
}));

const InputContainer = ({ listId, type }) => {
  const classes = useStyle(false);
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          onClick={() => setOpen(!open)}
          className={classes.addCard}
          elevation={0}
        >
          <Typography>
            {" "}
            {type === "card" ? "+ Add a Card" : "+ Add Another List"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default InputContainer;
