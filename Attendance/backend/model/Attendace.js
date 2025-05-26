import mongoose from "mongoose";
const AttendanceSchema = new mongoose.Schema({
  rollno: { type: Number, required: true },
  name: { type: String, required: true },
  date: { type: Date },
  subject: { type: String, required: true }
});

export default mongoose.model("Atteandance",AttendanceSchema)