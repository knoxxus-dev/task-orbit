import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Task from "./Task";
import { getTasks, updateTask } from "../utils/api"

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
        <>
            <h1>Tasks</h1>

            {loadError && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse "></span>
                                {loadError}
                            </p>
                        </section>
                    </div>
                </div>
            )}

            <TaskList
                tasks={tasks}
                onSave={saveTask}
            />

            {!loading && !loadError && (
                <div className="row">
                    <div className="col-sm-12">
                        <div className="button-group fluid">
                            <button className="button default" onClick={handleMoreClick}>
                                More...
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {loading && (
                <div className="center page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )}
        </>
    );
}

export default TasksPage;