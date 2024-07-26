import { useState } from 'react';

import Button from '../UI/Button';

function TodoForm(props) {
  const { addTodo } = props;

  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (!text) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="add a new todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button type="submit" onClick={addTodo}>
        new todo
      </Button>
    </form>
  );
}

export default TodoForm;
