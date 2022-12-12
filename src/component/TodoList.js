import React from 'react'
import './TodoList.css'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
    // console.log(todos)
  return (
    <div className='container-todo'>
        <ul className='todo-list'>
            
            {todos.map((todo) => (
                <Todo   
                        setTodos = { setTodos } 
                        todo = { todo } 
                        todos = { todos } 
                        key = { todo.id } 
                        text = { todo.text } 
                />
            ))}
        </ul>
    </div>
  );
}

export default TodoList