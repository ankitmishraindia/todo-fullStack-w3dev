import {Document,Schema,model} from 'mongoose';

interface Todo{
    task:String,
    completed:boolean
}

const todoSchema=new Schema(
    {
        task:{
            type:String,
            required:true,
            unique:true,
            maxlength:[15,"Task should be less than 16 char"],
            minlength:[2,"Please input a proper task"]
        },
        completed:{
            type:Boolean,
            required:true
        }
    }
)
interface TodoDocument extends Todo,Document{}

const todoModel=model<TodoDocument>("Todo",todoSchema)

export default todoModel;