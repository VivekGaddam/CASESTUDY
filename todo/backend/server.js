import express from "express";
import ConnectDB from "./config/db.js";
import Task from "./models/Task.js";

const app = express();
app.use(express.json());
await ConnectDB();

app.get("/", async (req, res) => {
    try {
        const all = await Task.find();
        res.status(200).json(all); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/", async (req, res) => {
    try {
        const new_task = new Task(req.body);
        await new_task.save();
        res.status(201).json(new_task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Task.findByIdAndDelete(id);
        if (deleted) {
            res.status(200).json({ message: "Task deleted" });
        } else {
            res.status(404).json({ error: "Task not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updated = await Task.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ error: "Task not found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
