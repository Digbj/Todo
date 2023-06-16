import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addtodo} from "./redux/action";
const Todo=()=>{
    const [input,setInput]=useState('');
    const dispatch=useDispatch();
    const submit=()=>{
        dispatch(addtodo(input));
        console.log(input)
        setInput('')
    }
    return(
        <div className="container">
            <div>
            <h3 className="header">Todo List</h3>
            </div>
            <div className="inp">
                <input placeholder="Enter New Todo..." onChange={(e)=>{setInput(e.target.value)}} value={input}/>
                <button className="btn" onClick={submit}>+</button>
            </div>

        </div>
    )
}
export default Todo;