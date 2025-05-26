import express from "express"
import mongoose from "mongoose";
import Student from "./model/Student.js";
import Attendance from "./model/Attendace.js";
import connectDB from "./config/db.js";
const app = express();
app.use(express.json());

await connectDB()

app.post("/register", async (req, res) => {
  const { rollno, name } = req.body;
  try {
    const exists = await Student.findOne({ rollno });
    if (exists) return res.status(400).json({ message: "Student already registered" });

    const student = new Student({ rollno, name });
    await student.save();
    res.status(201).json({ message: "Student registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/attendance", async (req, res) => {
  const { rollno, subject } = req.body;
  const date = new Date().toDateString(); 

  try {
    const student = await Student.findOne({ rollno });
    if (!student) return res.status(404).json({ message: "Student not found" });
    const existing = await Attendance.findOne({
      rollno,
      subject,
      date: new Date(date)
    });

    if (existing) return res.status(400).json({ message: "Attendance already marked today" });

    const attendance = new Attendance({
      rollno,
      name: student.name,
      date: new Date(date),
      subject
    });
    await attendance.save();
    res.status(201).json({ message: "Attendance marked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000,()=>{
    console.log("server running")
})