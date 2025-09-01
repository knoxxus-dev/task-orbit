import Task from "./Task";
import { Link } from "react-router";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";

function formatDescription(description: string): string {
    if (description.length <= 100) {
        return description;
    }
    return description.substring(0, 100) + "...";
}

interface TaskCardProps {
    task: Task;
    onEdit: (task: Task) => void;
}

function TaskCard({ task, onEdit }: TaskCardProps) {
    const handleEditClick = (taskBeingEdited: Task) => {
        onEdit(taskBeingEdited);
    };
    return (
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
                        {task.title}
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
                    onClick={() => handleEditClick(task)}
                >
                    Edit
                </Button>
            </CardFooter>
        </Card>
    );
}

export default TaskCard;
