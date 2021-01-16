import {
  Button,
  IconButton,
  InputBase,
  Paper,
  makeStyles,
  fade,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import storeAPI from "../../utils/storeAPI";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "280px",
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    backgroundColor: "#5aac44",
    "&:hover": {
      backgroundColor: fade("#5aac44", 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

const InputCard = ({ setOpen, listId, type }) => {
  const classes = useStyle();

  const { addMoreCard, addMoreList } = useContext(storeAPI);

  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
    } else {
      addMoreList(title);
    }
    setOpen(false);
    setTitle("");
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            placeholder={type === "card" ? "Enter a title" : "Enter List title"}
            onBlur={() => setOpen(false)}
            multiline
            fullwidth
            inputProps={{
              className: classes.input,
            }}
            value={title}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          {type === "card" ? "Add Card" : "Add List"}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
