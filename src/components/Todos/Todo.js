function Todo(props) {
  const { todo } = props;

  return <div>{todo.text}</div>;
}

export default Todo;
