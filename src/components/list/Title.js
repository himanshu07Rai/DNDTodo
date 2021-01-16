import { InputBase, makeStyles, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React, { useState, useContext } from "react";
import storeAPI from "../../utils/storeAPI";
const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#ebecf0",
    marginLeft: theme.spacing(1),
  },
  editableTitle: {
    flexGrow: "1",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  editableTitleContainer: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    },
  },
}));

const Title = ({ title, listId }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const classes = useStyle();

  const { updateListTitle } = useContext(storeAPI);

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    setOpen(!open);
    updateListTitle(newTitle, listId);
  };
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            onChange={handleOnChange}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            value={newTitle}
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
