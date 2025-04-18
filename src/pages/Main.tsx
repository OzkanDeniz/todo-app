import { Container } from "@mui/material";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "../components/TodoList";
import { notify, SweetIcon } from "../helper/sweetAlert";

// interface ITodoType {
//   task: string;
//   isDone: boolean;
//   id: string | number;
//   owner?: string; //! bu alan zorunlu değil, optional. Eğer varsa type string olur. Objelerde interface kullanılır.
// }

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Main = () => {
  // const [todos, setTodos] = useState([] as ITodoType[]);
  // const [todos, setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]); //!common use
  console.log(todos);

  const getTodos = async () => {
    try {
      const { data } = await axios(url);
      // const { data } = await axios<ITodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //! 1.yol
  // const addTodo = async(task:string)=>{
  //   try {
  //     await axios.post(url,{task,isDone:false})
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  //! 2.yol
  // type AddFn = (task: string) => Promise<void>; // Promise=Async
  const addTodo: AddFn = async (task) => {
    try {
      await axios.post(url, { task, isDone: false });
      notify("Todo Created!", SweetIcon.SUCCESS)
      getTodos();
    } catch (error) {
      console.log(error);
      notify("Todo Not Created!", SweetIcon.ERROR)
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getTodos();
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
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Container>
  );
};

export default Main;
