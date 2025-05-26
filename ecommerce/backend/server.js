import express from "express";
import ConnectDB from "./config/db.js";          
import Product from "./models/product.js";          

const app = express();
app.use(express.json());

await ConnectDB();                               

app.get("/", async (req, res) => {
  try {
    const all = await Product.find();
    res.json(all);                               
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post("/",async(req,res)=>{
  try{
    const {productName,price,description} =req.body
    const newproc=new Product({productName,price,description})
    await newproc.save();
  }
  catch(err){
    res.status(400).json({ error: err.message });
  }

})

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
