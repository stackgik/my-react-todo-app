const Todo = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <div className="todo-wrapper">
      <li className="todo">
        <input
          type="checkbox"
          id={todo.id}
          value={todo.checked}
          onChange={() => onToggleTodo(todo.id)}
          checked={todo.checked}
        />
        <span style={todo.checked ? { textDecoration: 'line-through' } : null}>
          {todo.todo}
        </span>
      </li>

      <button className="delete" onClick={() => onDeleteTodo(todo.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="delete__icon"
          viewBox="0 0 24 24"
        >
          <path d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
        </svg>
      </button>
    </div>
  );
};

export default Todo;
