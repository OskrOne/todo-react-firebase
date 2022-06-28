import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [input]);

  const addTodo = e => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className="App">
      <h1>TODO React Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
        <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => <Todo key={todo.id} arr={todo} />)}
      </ul>
    </div>
  );
}

export default App;
