import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Task from "./Task";
import { getTasks, updateTask } from "../../utils/api"

function TasksPage() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadError, setLoadError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const saveTask = async (task: Task) => {
        try {
            const updatedTask = await updateTask(task);
            setTasks((prev) =>
                prev.map((t) => (t.id === task.id ? updatedTask : t))
            );
        } catch (err) {
            console.error("Error updating task: ", err);
        }
    }

    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    }

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true);
                const data = await getTasks(currentPage);
                setLoadError("");
                if (currentPage === 1) {
                    setTasks(data);
                } else {
                    setTasks((tasks) => [...tasks, ...data]);
                }
            } catch (e) {
                if (e instanceof Error) {
                    setLoadError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchTasks();
    }, [currentPage]);

    return (
        <div>
            <h1>Tasks</h1>
            {loadError && (
                <div>
                    <p>{loadError}</p>
                </div>
            )}
            <TaskList
                tasks={tasks}
                onSave={saveTask}
            />
            {!loading && !loadError && (
                <button onClick={handleMoreClick}>
                    More...
                </button>
            )}
            {loading && (
                <div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
}

export default TasksPage;