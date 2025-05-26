import axios from "axios";
import { useState } from "react";

function Addtask() {
    const [task, setTask] = useState({
        heading: "",
        data: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000", task);
            setTask({ heading: "", data: "" }); // Clear form after submission
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="heading"
                placeholder="Heading"
                onChange={handleChange}
                value={task.heading}
            />
            <textarea
                name="data"
                placeholder="Task details"
                onChange={handleChange}
                value={task.data}
            ></textarea>
            <button type="submit">Add Task</button>
    
        </form>
        
    );
}

export default Addtask;
