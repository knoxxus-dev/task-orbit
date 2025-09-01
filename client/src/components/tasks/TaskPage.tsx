import { useEffect, useState } from 'react';
import { getTaskById } from '../../utils/api';
import TaskDetail from './TaskDetail';
import Task from './Task';
import { useParams } from 'react-router';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2, TriangleAlert } from "lucide-react";

function TaskPage() {
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
        <div className="mx-auto p-4 space-y-5">
            <h1 className="text-3xl font-bold tracking-tight">Task Detail</h1>
            {loading && (
                <Card className="p-6 flex flex-col items-center justify-center gap-2">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Loading task...</p>
                    <div className="w-full space-y-2 mt-4">
                        <Skeleton className="h-6 w-1/3" />
                        <Skeleton className="h-4 w-2/3" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </Card>
            )}
            {loadError && (
                <Alert variant="destructive">
                    <TriangleAlert className="h-4 w-4" />
                    <AlertTitle>Error loading task</AlertTitle>
                    <AlertDescription>{loadError}</AlertDescription>
                </Alert>
            )}
            {task && <TaskDetail task={task} />}
        </div>
    );
}

export default TaskPage;