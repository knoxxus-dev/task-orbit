import Task from "./Task";
import taskPlaceholderImage from "../../assets/task-placeholder-image.png";
import { Link } from "react-router";

function formatDescription(description: string): string {
    if (description.length <= 60) {
        return description;
    }
    return description.substring(0, 60) + "...";
}

interface TaskCardProps {
    task: Task;
    onEdit: (task: Task) => void;
}

function TaskCard({ task, onEdit }: TaskCardProps) {
    const handleEditClick = (taskBeingEdited: Task) => {
        onEdit(taskBeingEdited);
    };
    return (
        <div>
            <section>
                <Link to={task.id ? task.id.toString() : "#"}>
                    <img src={taskPlaceholderImage} alt="task-image"></img>
                    <h5>
                        <strong>{task.title}</strong>
                    </h5>
                </Link>
                <p>{formatDescription(task.description)}</p>
                <p>{task.assignedTo}</p>
                <p>{task.dueDate.toString()}</p>
                <p>{task.priority}</p>
                <p>{task.status}</p>
                <button
                    onClick={() => {
                        handleEditClick(task);
                    }}
                >
                    Edit
                </button>
            </section>
        </div>
    );
}

export default TaskCard;
