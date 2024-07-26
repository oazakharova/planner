import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
// import background1 from './images/background1.png';
// import background2 from './images/background2.png';
import TodoForm from './components/Todos/TodoForm';
import Todos from './components/Todos/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text: text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  return (
    <div className="App">
      <h1>Daily planner</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
