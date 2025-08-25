import Task from "../tasks/Task";

const API_URL = "http://localhost:5000/api";

export async function getTasks(): Promise<Task[]> {
    const response = await fetch(`${API_URL}/`, { method: "GET" });
    if (!response.ok) {
        throw new Error(`Failed to get tasks: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((task: Task) => ({
        ...task,
        dueDate: new Date(task.dueDate),
    }));
}

export async function createTask(task: Task): Promise<Task> {
    const response = await fetch(
        `${API_URL}/`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });
    if (!response.ok) {
        throw new Error(`Failed to create task: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.task;
}