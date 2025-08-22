import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Task from "./Task";
import { getTasks } from "../utils/api"

function TasksPage() {

    const [tasks, setTasks] = useState<Task[]>([]);

    const saveTask = (task: Task) => {
        let updatedTasks = tasks.map((t: Task) => {
            return t.id === task.id ? task : t;
        });
        setTasks(updatedTasks);
    }

    useEffect(() => {
        getTasks()
            .then(setTasks)
            .catch(console.error);
    }, []);

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