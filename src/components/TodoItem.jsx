import { Checkbox, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const TodoItem = ({ text, id, isComplete, handleDelete, handleComplete }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "90%",
        mt: 2,
        p: 0.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
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
