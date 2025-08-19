import { useState } from 'react';
import Task from "./Task";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

interface TaskListProps {
    tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
    const [taskBeingEdited, setTaskBeingEdited] = useState<Task | null>(null);

    const handleEdit = (task: Task) => {
        setTaskBeingEdited(task);
    }

    return (
        <div className="row">
            {tasks.map((task) => (
                <div key={task.id} className="cols-sm">
                    {task === taskBeingEdited ? (
                        <TaskForm />
                    ) : (
                        <TaskCard task={task} onEdit={handleEdit} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default TaskList;