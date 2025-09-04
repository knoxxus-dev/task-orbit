import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Task from "./Task";
import { getTasks, updateTask, getTotalTasks } from "../../utils/api";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon, } from "lucide-react"

function TasksPage() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadError, setLoadError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalTasks, setTotalTasks] = useState<number>();
    const tasksPerPage = 8;
    const totalPages = Math.ceil((totalTasks ?? 0) / tasksPerPage);

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

    useEffect(() => {
        const fetchTotalTasks = async () => {
            try {
                setLoading(true);
                const data = await getTotalTasks();
                setLoadError("");
                setTotalTasks(data);
            } catch (e) {
                if (e instanceof Error) {
                    setLoadError(e.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchTotalTasks();
    }, []);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true);
                const data = await getTasks(currentPage);
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
    }, [currentPage]);

    return (
        <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Tasks</h1>
            </div>

            {loadError && (
                <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg">
                    <p>{loadError}</p>
                </div>
            )}

            <div className="space-y-4">
                <TaskList tasks={tasks} onSave={saveTask} />
            </div>

            <div className="flex justify-center">
                {!loading && !loadError && (
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationLink
                                    onClick={() => setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))}
                                >
                                    <ChevronLeftIcon />
                                </PaginationLink>
                            </PaginationItem>
                            {Array.from({ length: totalPages || 0 }, (_, i) => i + 1).map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        isActive={page === currentPage}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationLink onClick={() => setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages))}>
                                    <ChevronRightIcon />
                                </PaginationLink>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                )}
            </div>
        </div>
    );
}

export default TasksPage;