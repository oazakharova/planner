import { RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

import styles from './Todo.module.css';

function Todo(props) {
  const { todo, deleteTodo, toggleTodo } = props;

  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      {todo.text}
      <div>
        <RiDeleteBin2Line
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={`${styles.checkIcon} ${
            todo.isCompleted ? styles.completedTodoIcon : ''
          }`}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
