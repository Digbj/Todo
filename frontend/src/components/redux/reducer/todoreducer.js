
import * as ActionType from '../action/type'
const todoReducers=(state=[],action)=>{
   switch(action.type){
    case ActionType.addnewtodo:
        return [action.payload,...state]
    case ActionType.getAllTodo:
        return action.payload
    case ActionType.toggle_todo:
      return  state.map(todo=>(
        todo._id===action.payload._id?{...todo,done:!todo.done}:todo
      ))
    case ActionType.update_todo:
      return state.map(todo=>(
        todo._id===action.payload._id?{...todo,data:action.payload.data}:todo
      ))
      case ActionType.delete_todo:
        return state.filter(todo=>todo._id!==action.payload._id)
    default:
        return state;
   }
}
export default todoReducers;