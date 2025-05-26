import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  rollno: { type: Number, required: true },
  name: { type: String, required: true }
});

export default mongoose.model("Student", StudentSchema);
