const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model('todo',TodoSchema)