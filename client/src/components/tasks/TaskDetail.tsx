import Task from "./Task.ts";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Flag, CheckCircle, Archive } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TaskDetailProps {
    task: Task
}

export default function TaskDetail({ task }: TaskDetailProps) {
    return (
        <Card className="max-w-2xl w-full rounded-2xl shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{task.title}</CardTitle>
                <p className="text-muted-foreground mt-1">{task.description}</p>
            </CardHeader>

            <Separator />

            <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-md">
                        <strong>Assigned To:</strong> {task.assignedTo}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-md">
                        <strong>Due Date:</strong> {task.dueDate.toDateString()}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-md">
                        <strong>Priority:</strong>{" "}
                        <Badge variant="outline">{task.priority}</Badge>
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-md">
                        <strong>Status:</strong>{" "}
                        <Badge variant="secondary">{task.status}</Badge>
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <Archive className="h-4 w-4 text-muted-foreground" />
                    <span className="text-md">
                        <strong>Archived:</strong>{" "}
                        <Badge variant={task.isArchived ? "default" : "destructive"}>
                            {task.isArchived ? "Active" : "Inactive"}
                        </Badge>
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}