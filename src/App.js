import './App.css';
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // Load todos from localStorage on first render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [editTodo, setEditTodo] = useState(null); // todo being edited

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Delete a todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  }

  // Add new todo or update existing todo
  const addTodo = (title, desc) => {
    if (editTodo) {
      // Update existing todo
      setTodos(todos.map((t) => {
        if (t.sno === editTodo.sno) {
          return { ...t, title: title, desc: desc };
        }
        return t;
      }));
      setEditTodo(null); // reset edit mode
    } else {
      // Add new todo
      let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      setTodos([...todos, myTodo]);
    }
  }

  // editing a todo
  const onEdit = (todo) => {
    setEditTodo(todo);
  }

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />

        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} editTodo={editTodo} />
                <Todos todos={todos} onDelete={onDelete} onEdit={onEdit} />
              </>
            }
          />

          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
