import React from 'react';
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete, onEdit }) => {

  const myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>

      {todos.length === 0 ? (
        <p>No Todos to display</p>
      ) : (
        todos.map((todo) => (
          <React.Fragment key={todo.sno}>
            <TodoItem 
              todo={todo} 
              onDelete={onDelete} 
              onEdit={onEdit} 
            />
            <hr />
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Todos;
