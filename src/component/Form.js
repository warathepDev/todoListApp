import React from 'react'
import { AiFillPlusSquare } from "react-icons/ai";
import './Form.css'

const Form = ({  setinputText, todos, setTodos, inputText }) => {
    // console.log(inputText);
    const inputTextHandler = (e) => {
        setinputText(e.target.value);
        // console.log(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        
    };

  return (

    <form >
        <input type="text" onChange={ inputTextHandler } className='todo-input' />
        <button onClick={ submitTodoHandler } className='todo-button' type='submit'>
            <AiFillPlusSquare className='btn-plus'/>
        </button>

    </form>
  );
}

export default Form