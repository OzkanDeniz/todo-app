import { DeleteOutline } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";

const TodoItem = () => {
  return (
    <div>
      <ListItem
        disableGutters
        sx={{ padding: "1rem", cursor: "pointer" }}
        secondaryAction={
          <IconButton aria-label="comment">
            <DeleteOutline sx={{ "&:hover": { color: "red" } }} />
          </IconButton>
        }
      >
        <ListItemText />
      </ListItem>
    </div>
  );
};

export default TodoItem;
