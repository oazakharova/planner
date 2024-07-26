import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import background1 from './images/background1.png';
import background2 from './images/background2.png';
import TodoForm from './components/Todos/TodoForm';
import Todos from './components/Todos/Todos';

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text: text, isCompleted: false };
    setTodo([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Daily planner</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
