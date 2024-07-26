import { RiDeleteBin2Line } from 'react-icons/ri';

import styles from './Todo.module.css';

function Todo(props) {
  const { todo, deleteTodo } = props;

  return (
    <div className={styles.todo}>
      {todo.text}
      <div>
        <RiDeleteBin2Line
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
