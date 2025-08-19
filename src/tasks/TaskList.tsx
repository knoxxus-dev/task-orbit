import { useState } from 'react';
import Task from "./Task";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

interface TaskListProps {
    tasks: Task[];
    onSave: (task: Task) => void;
}

function TaskList({ tasks, onSave }: TaskListProps) {
    const [taskBeingEdited, setTaskBeingEdited] = useState<Task | null>(null);

    const handleEdit = (task: Task) => {
        setTaskBeingEdited(task);
    }

    const cancelEdit = () => {
        setTaskBeingEdited(null);
    };

    return (
        <div className="row">
            {tasks.map((task) => (
                <div key={task.id} className="cols-sm">
                    {task === taskBeingEdited ? (
                        <TaskForm
                            task={task}
                            onCancel={cancelEdit}
                            onSave={onSave}
                        />
                    ) : (
                        <TaskCard task={task} onEdit={handleEdit} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default TaskList;