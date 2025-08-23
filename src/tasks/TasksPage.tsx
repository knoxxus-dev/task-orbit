import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Task from "./Task";
import { getTasks } from "../utils/api"

function TasksPage() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadError, setLoadError] = useState<string | undefined>(undefined);

    const saveTask = (task: Task) => {
        let updatedTasks = tasks.map((t: Task) => {
            return t.id === task.id ? task : t;
        });
        setTasks(updatedTasks);
    }

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true);
                const data = await getTasks();
                setLoadError("");
                setTasks(data);
            } catch (e) {
                if (e instanceof Error) {
                    setLoadError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchTasks();
    }, []);

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