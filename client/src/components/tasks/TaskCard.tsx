import Task from "./Task";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import TaskForm from "./TaskForm";

function formatDescription(description: string): string {
    if (description.length <= 100) {
        return description;
    }
    return description.substring(0, 100) + "...";
}

function formatTitle(title: string): string {
    if (title.length <= 50) {
        return title;
    }
    return title.substring(0, 50) + "...";
}

interface TaskCardProps {
    task: Task;
    onSave: (task: Task) => void;
}

function TaskCard({ task, onSave }: TaskCardProps) {
    const [openForm, setOpenForm] = useState<boolean>(false);

    return (
        <>
            <Card
                key={task.id}
                className="h-full min-h-[300px] flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl border border-gray-200"
            >
                <CardHeader className="pb-2">
                    <CardTitle>
                        <Link
                            to={task.id ? task.id.toString() : "#"}
                            className="text-lg font-semibold text-blue-600 hover:underline"
                        >
                            {formatTitle(task.title)}
                        </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm mt-1">
                        {formatDescription(task.description)}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2 text-gray-700 text-sm flex-grow">
                    <p>
                        <span className="font-medium">Assigned To:</span> {task.assignedTo}
                    </p>
                    <p>
                        <span className="font-medium">Due Date:</span>{" "}
                        {task.dueDate.toString()}
                    </p>
                    <p>
                        <span className="font-medium">Priority:</span> {task.priority}
                    </p>
                    <p>
                        <span className="font-medium">Status:</span> {task.status}
                    </p>
                </CardContent>

                <CardFooter className="flex justify-end">
                    <Button
                        variant="outline"
                        className="rounded-lg border-blue-500 text-blue-500 hover:bg-blue-50 text-sm"
                        onClick={() => setOpenForm(true)}
                    >
                        Edit
                    </Button>
                </CardFooter>
            </Card>

            {openForm && (
                <TaskForm
                    task={task}
                    onSave={(updatedTask) => {
                        onSave(updatedTask);
                        setOpenForm(false);
                    }}
                    open={openForm}
                    onClose={() => setOpenForm(false)}
                >
                </TaskForm>
            )}
        </>
    );
}

export default TaskCard;
