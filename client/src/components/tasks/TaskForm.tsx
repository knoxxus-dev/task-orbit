import type { SyntheticEvent } from "react";
import { useState } from "react";
import Task from "./Task";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface errorSchema {
    title: string;
    description: string;
}

interface TaskFormProps {
    task: Task;
    onSave: (task: Task) => void;
    open: boolean;
    onClose: () => void;
}

function TaskForm({ task: initialTask, onSave, open, onClose }: TaskFormProps) {

    const [task, setTask] = useState<Task>(initialTask);
    const [error, setError] = useState<errorSchema>({ title: '', description: '' });

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isValid()) return;
        onSave(task);
    }

    function validate(task: Task) {
        let error: errorSchema = { title: '', description: '' };
        if (task.title.length === 0) {
            error.title = "Title is required.";
        }
        if (task.title.length > 0 && task.title.length < 3) {
            error.title = 'Title needs to be at least 3 characters.';
        }
        if (task.description.length === 0) {
            error.description = 'Description is required.';
        }
        return error;
    }

    function isValid() {
        return (
            error.title.length === 0 &&
            error.description.length === 0
        );
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { type, name, value } = event.target;
        let updatedValue: string | number | boolean | Date = value;

        if (event.target instanceof HTMLInputElement) {
            if (type === "checkbox") {
                updatedValue = event.target.checked;
            }
            if (type === "number") {
                updatedValue = Number(value);
            }
            if (type === "date") {
                updatedValue = new Date(value);
            }
        }

        const change = {
            [name]: updatedValue,
        }

        let updatedTask: Task;
        setTask((t) => {
            updatedTask = new Task({ ...t, ...change });
            return updatedTask;
        });
        setError(() => validate(updatedTask));
    }


    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-lg rounded-xl">
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={task.title}
                            onChange={handleChange}
                            className="w-full border rounded-md px-2 py-1"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={task.description}
                            onChange={handleChange}
                            className="w-full border rounded-md px-2 py-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Assigned To</label>
                        <input
                            type="text"
                            name="assignedTo"
                            value={task.assignedTo}
                            onChange={handleChange}
                            className="w-full border rounded-md px-2 py-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Due Date</label>
                        <input
                            type="date"
                            name="dueDate"
                            value={task.dueDate.toISOString().split("T")[0]}
                            onChange={handleChange}
                            className="w-full border rounded-md px-2 py-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Priority</label>
                        <select
                            name="priority"
                            value={task.priority}
                            onChange={handleChange}
                            className="w-full border rounded-md px-2 py-1"
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Status</label>
                        <select
                            name="status"
                            value={task.status}
                            onChange={handleChange}
                            className="w-full border rounded-md px-2 py-1"
                        >
                            <option>To Do</option>
                            <option>In-progress</option>
                            <option>Done</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="isArchived"
                            checked={task.isArchived}
                            onChange={handleChange}
                        />
                        <label className="text-sm">Archived?</label>
                    </div>

                    <DialogFooter className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );

}

export default TaskForm;