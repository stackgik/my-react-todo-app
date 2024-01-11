import { useState } from 'react';
import Todo from './Todo';

const Main = ({ todos, onToggleTodo, onDeleteTodo, onDeleteTodos }) => {
  const [sortBy, setSortBy] = useState('default');

  let sortedTodo;

  if (sortBy === 'default') sortedTodo = todos;
  if (sortBy === 'completed')
    sortedTodo = todos.slice().filter((todo) => todo.checked);
  if (sortBy === 'uncompleted')
    sortedTodo = todos.slice().filter((todo) => todo.checked === false);

  return (
    <div className="main">
      <span className="title">todo</span>

      <ul className="todos">
        {sortedTodo.map((todo) => {
          return (
            <Todo
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
              key={todo.id}
            />
          );
        })}
      </ul>

      {todos.length > 0 ? (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">sort todos by todo order</option>
            <option value="completed">sort todos by completed todo</option>
            <option value="uncompleted">sort todos by uncompleted todo</option>
          </select>

          <button className="clear-btn" onClick={onDeleteTodos}>
            Clear todos
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Main;
