import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Box, TextField, Button } from "@mui/material";
import TodoItem from "./TodoItem";

const defaultTodo = {
  item: "",
  id: "",
  isComplete: false,
};

export const UserContext = createContext(null);

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState(defaultTodo);

  function handleChange(e) {
    setNewTodo({ item: e.target.value, id: uuidv4() });
  }

  function handleClick() {
    if (newTodo.item) {
      setTodoList([...todoList, newTodo]);
      setNewTodo(defaultTodo);
    }
  }

  function handleComplete(id) {
    setTodoList([
      ...todoList.map((el) =>
        el.id === id ? { ...el, isComplete: !el.isComplete } : el
      ),
    ]);
  }

  function handleDelete(id) {
    setTodoList([...todoList.filter((el) => el.id !== id)]);
  }

  return (
    <UserContext.Provider value={{ todoList, setTodoList }}>
      <Container
        sx={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 1,
        }}
      >
        <h2>Todo App</h2>
        <Box
          component="form"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            // "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ width: "50%", m: 1 }}
            id="standard-basic"
            label="enter plan to do"
            variant="standard"
            value={newTodo.item}
            onChange={handleChange}
          />
          <Button sx={{ p: 1 }} variant="contained" onClick={handleClick}>
            Add
          </Button>
        </Box>
        <Box>
          {todoList.map((el, index) => (
            <TodoItem
              key={index}
              text={el.item}
              id={el.id}
              isComplete={el.isComplete}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          ))}
        </Box>
      </Container>
    </UserContext.Provider>
  );
};

export default TodoApp;
