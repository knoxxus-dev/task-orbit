import Task from "./Task";
import taskPlaceholderImage from "../assets/task-placeholder-image.png"

function formatDescription(description: string): string {
    return description.substring(0, 60) + "...";
}

interface TaskCardProps {
    task: Task;
}

function TaskCard({ task }: TaskCardProps) {
    const handleEditClick = (taskBeingEdited: Task) => {
        console.log(taskBeingEdited);
    };
    return (
        <div className="card">
            <section className="section dark">
                <img src={taskPlaceholderImage} alt="task-image"></img>
                <h5 className="strong">
                    <strong>{task.title}</strong>
                </h5>
                <p>{formatDescription(task.description)}</p>
                <p>{task.assignedTo}</p>
                <p>{task.dueDate.toString()}</p>
                <button
                    className="bordered"
                    onClick={() => {
                        handleEditClick(task);
                    }}
                >
                    <span className="icon-edit "></span>
                    Edit
                </button>
            </section>
        </div>
    );
}

export default TaskCard;
