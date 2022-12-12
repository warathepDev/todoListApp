import React from 'react'
import { AiFillCheckSquare } from 'react-icons/ai' ;
import { BsFillTrashFill } from "react-icons/bs";

import './Todo.css'

const Todo = ({ text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos( todos.filter((el)=> el.id !== todo.id) );
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if ( item.id === todo.id ){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );
    }
  return (
    
    <div className="todo">

        <li className = { `todo-item ${ todo.completed ? "completed" : "" }` }>{text}</li>

        <button onClick = { completeHandler } className={ `todo-check ${ todo.completed ? "completed" : "" }` }>
            < AiFillCheckSquare className='check-btn'/>
        </button>
        <button onClick = { deleteHandler } className='todo-trash'>
            < BsFillTrashFill className='trash-btn'/>
        </button>
    </div>

  );
}

export default Todo