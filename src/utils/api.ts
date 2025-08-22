import Task from "../tasks/Task";

const API_URL = "http://localhost:5000/api";

export async function getTasks(): Promise<Task[]> {
    const response = await fetch(`${API_URL}/`, { method: "GET" });
    if (!response.ok) {
        throw new Error("Failed to fetch tasks.");
    }
    const data = await response.json();
    return data.map((task: Task) => ({
        ...task,
        dueDate: new Date(task.dueDate),
    }));
}