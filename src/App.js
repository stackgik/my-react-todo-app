import { useState } from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import AddTodo from './AddTodo';
import Form from './Form';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [isRotated, setIsRotated] = useState(false);

  function handleDeleteTodos() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all todos?'
    );
    if (!confirmed) return;
    setTodos([]);
  }

  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((item) => item.id !== id));
  }

  // How to update an array
  function handleToggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  return (
    <div className="todo-container">
      <Header todos={todos} />
      <AddTodo
        status={isOpen}
        onOpen={setIsOpen}
        rotated={isRotated}
        onRotated={setIsRotated}
      />
      <Main
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
        onDeleteTodos={handleDeleteTodos}
      />
      <Form
        status={isOpen}
        onOpen={setIsOpen}
        onSetTodos={setTodos}
        rotated={isRotated}
        onRotated={setIsRotated}
      />
    </div>
  );
}
