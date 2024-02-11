import { Container } from "@mui/material";
import "./App.css";
import LoginPage from "./components/LoginPage";
import TodoApp from "./components/TodoApp";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {isAuthenticated ? (
        <p onClick={() => setIsAuthenticated(false)}>Logout</p>
      ) : null}
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <TodoApp /> */}
        {isAuthenticated ? <TodoApp /> : <LoginPage />}
      </Container>
    </AuthContext.Provider>
  );
}

export default App;
