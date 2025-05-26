import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true }, 
    price: { type: Number, required: true },           
    description: { type: String }                      
});

export default mongoose.model("Product", ProductSchema);  
