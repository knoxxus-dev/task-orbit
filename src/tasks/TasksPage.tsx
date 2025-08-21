import { useState } from "react";
import { MOCK_TASKS } from "./MockTasks";
import TaskList from "./TaskList";
import Task from "./Task";

function TasksPage() {

    const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

    const saveTask = (task: Task) => {
        let updatedTasks = tasks.map((t: Task) => {
            return t.id === task.id ? task : t;
        });
        setTasks(updatedTasks);
    }

    return (
        <>
            <h1>Tasks</h1>
            <TaskList
                tasks={tasks}
                onSave={saveTask}
            />
        </>
    );
}

export default TasksPage;