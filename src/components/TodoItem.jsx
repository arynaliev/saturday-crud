import { Checkbox, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const TodoItem = ({ text, id, isComplete, handleDelete, handleComplete }) => {
  return (
    <Paper>
      <Checkbox checked={isComplete} onChange={() => handleComplete(id)} />
      <Typography
        sx={{ textDecoration: `${isComplete ? "line-through" : "none"}` }}
        variant="p"
      >
        {text}
      </Typography>
      <IconButton onClick={() => handleDelete(id)}>
        <HighlightOffIcon />
      </IconButton>
    </Paper>
  );
};

export default TodoItem;
