import React from "react";

import { List, ListItem, ListItemText } from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import { db } from '../firebase';
import './Todo.css';

const Todo = ({ arr }) => {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
                <DeleteForeverIcon fontSize="large" onClick={() => {db.collection('todos').doc(arr.id).delete()}} />
            </ListItem>
        </List>
    )
}

export default Todo;