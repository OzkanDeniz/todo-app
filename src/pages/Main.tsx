import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import { useState } from "react";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  owner?: string; //! bu alan zorunlu değil, eğer varsa type string olur.
}

const Main = () => {
  // const [todos, setTodos] = useState([] as ITodoType[]);
  const [todos, setTodos] = useState<Array<ITodoType>>([]);
  return (
    <Container>
      <Header />
      <AddTodo />
    </Container>
  );
};

export default Main;
