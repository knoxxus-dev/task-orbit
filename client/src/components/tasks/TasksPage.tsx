import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import Task from "./Task";
import { getTasks, updateTask } from "../../utils/api";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon, } from "lucide-react"

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
                            <PaginationItem>
                                <PaginationLink
                                    isActive={currentPage === 1}
                                    onClick={() => setCurrentPage(1)}
                                >
                                    1
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    isActive={currentPage === 2}
                                    onClick={() => setCurrentPage(2)}
                                >
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink onClick={() => setCurrentPage((currentPage) => currentPage + 1)}>
                                    <ChevronRightIcon />
                                </PaginationLink>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                )}

                {loading && (
                    <div className="text-gray-500">
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TasksPage;