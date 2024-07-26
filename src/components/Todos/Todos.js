import Todo from './Todo';

function Todos(props) {
  const { todos } = props;

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export default Todos;
