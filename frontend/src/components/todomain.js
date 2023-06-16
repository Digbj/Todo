import { toggleTodo,updateTodo,deleteTodo } from "./redux/action";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoM = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [text,setText]=useState(todo.data)
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const Submit=(e)=>{
    // e.preventDefault();
    setEdit(prevState=>!prevState);
    dispatch(updateTodo(todo._id,text));
  }
  console.log(edit);
  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{ textDecoration: todo.done ? "line-through" : "" }}
    >
      <span style={{ display: edit ? "none" : "" }}>{todo.data}</span>
      <form
      style={{ display: edit ? "inline" : "none" }}
      onSubmit={Submit}
      >
        <input className="edit" type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
      </form>
      <span className="btns">
        <button
          className="btn1"
          onClick={() => {
            setEdit((prevState) => !prevState);
          }}
        >
          Edit
        </button>
        <button className="btn2"  onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
      </span>
    </li>
  );
};
export default TodoM;
