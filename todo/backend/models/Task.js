import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema({
    heading:{type:String,require:true},
    data:{type:String,require:true}
});

export default mongoose.model("Task",TaskSchema)