import { useState } from 'react';

const Form = ({ status, onOpen, onSetTodos, rotated, onRotated }) => {
  const [todo, setTodo] = useState('');

  function handleTodos(todo) {
    onSetTodos((todos) => [...todos, todo]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo) return;
    setTodo('');
    onOpen(!status);
    onRotated(!rotated);

    const newTodo = {
      todo,
      checked: false,
      id: Number(String(Date.now()).slice(-4)),
    };

    handleTodos(newTodo);
  }

  return status ? (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Input task..."
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button className="btn">save</button>
        </form>
      </div>
    </>
  ) : (
    ''
  );
};

export default Form;
