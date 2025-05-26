import mongoose from "mongoose"

const ConnectDB= async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/todo")
        .then( console.log("Connected Db"))
    }
    catch(err){
        console.log("error in db connection ")
    }
}
export default ConnectDB