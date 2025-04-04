import { Save } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const AddTodo = () => {
//   const [task, setTask] = useState<string>("");
const [task, setTask] = useState("");

const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setTask(e.target.value)

const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  console.log(task)
  //addTodo()

}
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}
    >
      <TextField
        variant="outlined"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        // onChange={e=>setTask(e.target.value)}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        endIcon={<Save />}
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodo;
