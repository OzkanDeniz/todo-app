import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import { useState } from "react";

interface ITodoType{
task:string,
isDone:boolean,
id:string | number
}

const Main = () => {
  const [todos, setTodos] = useState([])
  return (
    <Container>
      <Header />
      <AddTodo/>
    </Container>
  );
};

export default Main;
