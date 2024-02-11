import { TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../App";

const creds = {
  username: "arynaliev",
  password: "1808",
};

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (user.username === creds.username && user.password === creds.password) {
      setIsAuthenticated(true);
    } else {
      alert("Try again!");
    }
    setUser({ username: "", password: "" });
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <form
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "center",
      }}
      onSubmit={handleSubmit}
    >
      <h2>Login</h2>
      <TextField
        name="username"
        label={"username"}
        value={user.username}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="password"
        label={"password"}
        value={user.password}
        variant="outlined"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};

export default LoginPage;
