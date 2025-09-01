import Task from "./Task";
import TaskCard from "./TaskCard";

interface TaskListProps {
    tasks: Task[];
    onSave: (task: Task) => void;
}

function TaskList({ tasks, onSave }: TaskListProps) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 items-stretch">
            {tasks.map((task) => (
                <div key={task.id}>
                    <TaskCard task={task} onSave={onSave} />
                </div>
            ))}
        </div>
    );
}

export default TaskList;