
function AllTask({task}) {

    return (
        <div className="task">
            {task.map((taskItem, index) => (
                <div key={index} className="data">
                    <h1>{taskItem.heading}</h1>
                    <h2>{taskItem.data}</h2>
                </div>
            ))}
        </div>
    );
}

export default AllTask;
