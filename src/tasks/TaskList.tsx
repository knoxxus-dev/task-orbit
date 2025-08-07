import { Task } from "./Task";
import taskImage from "../assets/task-image.png";

interface TaskListProps {
    tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
    return (
        <div className="row">
            {tasks.map((task) => (
                <div key={task.id} className="cols-sm">
                    <div className="card">
                        <section className="section dark">
                            <img src={taskImage} alt="task-image"></img>
                            <h5 className="strong">
                                <strong>{task.title}</strong>
                            </h5>
                            <p>{task.description}</p>
                            <p>{task.assignedTo}</p>
                            <p>{task.dueDate.toString()}</p>
                        </section>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;