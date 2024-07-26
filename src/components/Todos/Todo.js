import styles from './Todo.module.css';

function Todo(props) {
  const { todo } = props;

  return <div className={styles.todo}>{todo.text}</div>;
}

export default Todo;
