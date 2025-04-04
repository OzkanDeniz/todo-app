import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import { useEffect, useState } from "react";
import axios from "axios";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
  owner?: string; //! bu alan zorunlu değil, optional. Eğer varsa type string olur. Objelerde interface kullanılır.
}

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Main = () => {
  // const [todos, setTodos] = useState([] as ITodoType[]);
  // const [todos, setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]); //!common use

  const getTodos = async () => {
    try {
      const { data } = await axios(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodo />
    </Container>
  );
};

export default Main;
