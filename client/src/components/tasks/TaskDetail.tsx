import Task from "./Task.ts";
import taskPlaceholderImage from "../../assets/task-placeholder-image.png";

interface TaskDetailProps {
    task: Task
}

export default function TaskDetail({ task }: TaskDetailProps) {
    return (
        <div>
            <img
                src={taskPlaceholderImage}
                alt={task.title}
            />
            <section>
                <h3>
                    <strong>{task.title}</strong>
                </h3>
                <p>{task.description}</p>
                <p>Assigned To : {task.assignedTo}</p>
                <p>Due Date : {task.dueDate.toString()}</p>
                <p>Priority : {task.priority}</p>
                <p>Status: {task.status}</p>
                <p>
                    <mark>
                        {' '}
                        {task.isArchived ? 'active' : 'inactive'}
                    </mark>
                </p>
            </section>
        </div>
    );
}