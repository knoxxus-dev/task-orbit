import type { SyntheticEvent } from "react";
import { useState } from "react";
import Task from "./Task";

interface errorSchema {
    title: string;
    description: string;
}

interface TaskFormProps {
    task: Task;
    onSave: (task: Task) => void;
    onCancel: () => void;
}

function TaskForm({ task: initialTask, onSave, onCancel }: TaskFormProps) {

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
            {error.title.length > 0 && (
                <div className="card error">
                    <p>{error.title}</p>
                </div>
            )}
            <label htmlFor="description">Task Description</label>
            <input
                type="text"
                name="description"
                placeholder="Enter task description"
                value={task.description}
                onChange={handleChange}
            />
            {error.description.length > 0 && (
                <div className="card error">
                    <p>{error.title}</p>
                </div>
            )}
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
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <label htmlFor="status">Status</label>
            <select
                name="status"
                defaultValue="To Do"
                value={task.priority}
                onChange={handleChange}
            >
                <option value="To Do">To Do</option>
                <option value="In-progress">In Progress</option>
                <option value="Done">Done</option>
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