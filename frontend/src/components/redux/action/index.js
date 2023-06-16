import axios from 'axios';
import { addnewtodo ,getAllTodo,toggle_todo,update_todo,delete_todo} from './type';
const url='http://localhost:8000'
export const addtodo=(data)=>async(dispatch)=>{
    try{
    const res= await axios.post(`${url}/todos`,{data});
    dispatch({type:addnewtodo,payload:res.data})
    }catch(err){
console.log('error while calling post api',err.message)
    }
   
}


export const getAllData=(data)=>async(dispatch)=>{
    try{
    const res= await axios.get(`${url}/todos`);
    dispatch({type:getAllTodo,payload:res.data})
    }catch(err){
console.log('error while calling getall api',err.message)
    }
   
}

export const toggleTodo=(id)=>async(dispatch)=>{
    try{
    const res= await axios.get(`${url}/todos/${id}`);
    dispatch({type:toggle_todo,payload:res.data})
    }catch(err){
console.log('error while calling getall api',err.message)
    }
   
}

export const updateTodo=(id,data)=>async(dispatch)=>{
    try{
    const res= await axios.put(`${url}/todos/${id}`,{data});
    dispatch({type:update_todo,payload:res.data})
    }catch(err){
console.log('error while calling update api',err.message)
    }
   
}

export const deleteTodo=(id)=>async(dispatch)=>{
    try{
    const res= await axios.delete(`${url}/todos/${id}`);
    dispatch({type:delete_todo,payload:res.data})
    }catch(err){
console.log('error while calling delete api',err.message)
    }
   
}
