import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button 
        className="btn btn-sm btn-primary me-2" 
        onClick={() => onEdit(todo)}
      >
        Edit
      </button>
      <button 
        className="btn btn-sm btn-danger" 
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

