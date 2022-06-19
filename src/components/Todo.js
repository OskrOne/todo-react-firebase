import { List, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";

const Todo = ({ todo }) => {
    return (
        <List className="todo_list">
            <ListItemAvatar />
            <ListItemText primary={todo} secondary={todo} />
        </List>
    )
}

export default Todo;