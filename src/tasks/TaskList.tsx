import Task from "./Task";
import TaskCard from "./TaskCard";

interface TaskListProps {
    tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
    return (
        <div className="row">
            {tasks.map((task) => (
                <div key={task.id} className="cols-sm">
                    <TaskCard task={task} />
                </div>
            ))}
        </div>
    );
}

export default TaskList;