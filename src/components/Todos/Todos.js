import styles from './Todos.module.css';
import Todo from './Todo';

function Todos(props) {
  const { todos, deleteTodo, toggleTodo } = props;

  return (
    <div className={styles.todos}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h2>todo list is empty</h2>
      )}
    </div>
  );
}

export default Todos;
