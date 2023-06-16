import { useEffect } from "react"
import { getAllData } from "./redux/action"
import { useDispatch,useSelector } from "react-redux"
import TodoM from "./todomain"
const Display=()=>{
    const dispatch=useDispatch();
    const todos=useSelector(state=>state.todos)
    useEffect(()=>{
        dispatch(getAllData())
    },[])
    return(
        <article>
            <ul>
                {todos.map(data=>{
                   return <TodoM 
                   key={data._id}
                   todo={data}/>
                    
                })}
            </ul>
        </article>
    )
}
export default Display;