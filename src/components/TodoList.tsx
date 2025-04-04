import { Grid, Typography } from "@mui/material";


interface ITodoList{
    todos:ITodoType[]
}

const TodoList: React.FC<ITodoList>= ({todos}) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        mt: 3,
      }}
    >
      <Grid
        size={{ xs: 12, sm: 8, md: 5 }}
        position="relative"
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.5rem",
        }}
      >
        <Typography
          className="title"
          color="secondary"
          align="center"
          variant="h4"
        >
          InProgress Todos
        </Typography>
        (
        <Typography color="error" mt={3}>
          No InProgress Todos!
        </Typography>
        )
      </Grid>
      <Grid
        size={{ xs: 12, sm: 8, md: 5 }}
        position="relative"
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.5rem",
        }}
      >
        <Typography
          className="title"
          sx={{ color: "green" }}
          align="center"
          variant="h4"
        >
          Completed Todos
        </Typography>
        (
        <Typography color="error" mt={3}>
          No Completed Todos!
        </Typography>
        )
      </Grid>
    </Grid>
  );
};

export default TodoList;
