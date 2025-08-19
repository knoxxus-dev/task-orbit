import type { SyntheticEvent } from "react";
import { useState } from "react";
import Task from "./Task";

interface TaskFormProps {
    task: Task;
    onSave: (task: Task) => void;
    onCancel: () => void;
}

function TaskForm({ task: initialTask, onSave, onCancel }: TaskFormProps) {

    const [task, setTask] = useState(initialTask);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onSave(task);
    }

    const handleChange = (event: any) => {
        const { type, name, value, checked } = event.target;
        let updatedValue = type === "checkbox" ? checked : value;

        if (type === "number") {
            updatedValue = Number(updatedValue);
        }

        if (type === "date") {
            updatedValue = new Date(updatedValue);
        }

        const change = {
            [name]: updatedValue,
        }

        let updatedTask: Task;
        setTask((t) => {
            updatedTask = new Task({ ...t, ...change });
            return updatedTask;
        });
    }

    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="title">Task Title</label>
            <input
                type="text"
                name="title"
                placeholder="Enter task title"
                required
                value={task.title}
                onChange={handleChange}
            />

            <label htmlFor="description">Task Description</label>
            <input
                type="text"
                name="description"
                placeholder="Enter task description"
                value={task.description}
                onChange={handleChange}
            />

            <label htmlFor="assignedTo">Assigned To</label>
            <input
                type="text"
                name="assignedTo"
                placeholder="Enter assignee's name"
                value={task.assignedTo}
                onChange={handleChange}
            />

            <label htmlFor="dueDate">Due Date</label>
            <input
                type="date"
                name="dueDate"
                value={task.dueDate.toISOString().split("T")[0]}
                onChange={handleChange}
            />

            <label htmlFor="priority">Priority</label>
            <select
                name="priority"
                defaultValue="medium"
                value={task.priority}
                onChange={handleChange}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <label htmlFor="status">Status</label>
            <select
                name="status"
                defaultValue="todo"
                value={task.priority}
                onChange={handleChange}
            >
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>

            <label htmlFor="isArchived">Archived?</label>
            <input
                type="checkbox"
                name="isArchived"
                checked={task.isArchived}
                onChange={handleChange}
            />

            <div className="input-group">
                <button type="submit" className="primary bordered medium"
                >
                    Save
                </button>
                <span />
                <button type="button" className="bordered medium"
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default TaskForm;