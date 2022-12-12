import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './component/Form';
import TodoList from './component/TodoList';
 
function App() {

  const [inputText, setinputText] = useState('');
  const [todos, setTodos] = useState([]); 

  // run when app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //save data local storage
  useEffect(() => {
    saveLocalTodos();
  }, [todos] );

  const saveLocalTodos = () => {     
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {

      const saved = localStorage.getItem("todos");
      let todoLocal = JSON.parse(saved);
      setTodos(todoLocal);

  }; 


  return (
    <div className="App">
        <div className="container">
            <header>
                <h1>  Todo List  </h1>
            </header>
            < Form  inputText = { inputText } 
                    todos = { todos } 
                    setTodos = { setTodos }
                    setinputText = { setinputText } 
            />
            < TodoList setTodos = { setTodos }  todos = { todos }  />

        </div>
    </div>
  );
}

export default App;
