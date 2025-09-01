import { useEffect, useState } from 'react';
import { getTaskById } from '../../utils/api';
import TaskDetail from './TaskDetail';
import Task from './Task';
import { useParams } from 'react-router';

function ProjectPage() {
    const [loading, setLoading] = useState(false);
    const [task, setTask] = useState<Task | null>(null);
    const [loadError, setLoadError] = useState<string | null>(null);
    const params = useParams();
    const id = Number(params.id);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true);
                const currentTask = await getTaskById(id);
                setTask(currentTask);
                setLoading(false);
            } catch (e) {
                if (e instanceof Error) {
                    setLoadError(e.message);
                    setLoading(false);
                }
            }
        }

        fetchTasks();
    }, [id]);

    return (
        <div>
            <h1>Task Detail</h1>
            {loading && (
                <div>
                    <p>Loading...</p>
                </div>
            )}
            {loadError && (
                <div>
                    <section>
                        <p>
                            {loadError}
                        </p>
                    </section>
                </div>
            )}
            {task && <TaskDetail task={task} />}
        </div>
    );
}

export default ProjectPage;