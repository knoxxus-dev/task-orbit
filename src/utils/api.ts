import Task from "../tasks/Task";

const API_URL = "http://localhost:5000/api";

export async function getTasks(page: number = 1, limit: number = 10): Promise<Task[]> {
    const response = await fetch(`${API_URL}/?_page=${page}&_limit=${limit}`, { method: "GET" });
    if (!response.ok) {
        throw new Error(`Failed to get tasks: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.tasks.map((task: Task) => ({
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
    return {
        ...data.task,
        dueDate: data.task.dueDate ? new Date(data.task.dueDate) : null,
    };
}

export async function updateTask(task: Task): Promise<Task> {
    const response = await fetch(
        `${API_URL}/?_id=${task.id}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });
    if (!response.ok) {
        throw new Error(`Failed to update task: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return {
        ...data.task,
        dueDate: data.task.dueDate ? new Date(data.task.dueDate) : null,
    };
}