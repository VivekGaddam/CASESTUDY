import './App.css';
import Addtask from './component/Addtask';
import AllTask from './component/Alltask';
import axios from 'axios';
import { useState,useEffect } from 'react';
function App() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000");
                setTask(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    },);
  return (
    <div className="App">
      <Addtask/>
      <AllTask task={task}/>
    </div>
  );
}

export default App;
