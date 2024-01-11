import Form from './Form';

const AddTodo = ({ status, onOpen, rotated, onRotated }) => {
  const handleClick = () => {
    onOpen(!status);
    onRotated(!rotated);
  };

  return (
    <div>
      <button className="add-todo" onClick={handleClick}>
        <span className={`plus-sign ${rotated ? 'rotated' : null}`}>&#43;</span>
      </button>

      <Form status={status} setStatus={onOpen} />
    </div>
  );
};

export default AddTodo;
