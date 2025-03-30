import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import { useState } from "react";
import axios from "axios";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  owner?: string; //! bu alan zorunlu değil, eğer varsa type string olur.
}

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos"

const Main = () => {
  // const [todos, setTodos] = useState([] as ITodoType[]);
  // const [todos, setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]); //!common use

  const getTodos = async()=>{
    try {
      const res = await axios(url)
    } catch (error) {
      
    }
  }

  return (
    <Container>
      <Header />
      <AddTodo />
    </Container>
  );
};

export default Main;
