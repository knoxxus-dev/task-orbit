import { Request, Response } from "express";
import { MOCK_TASKS } from "../models/MockTasks";
import Task from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
    try {
        const { _page = "1", _limit = "10" } = req.query;

        const page = parseInt(_page as string, 10);
        const limit = parseInt(_limit as string, 10);

        const start = (page - 1) * limit;
        const end = start + limit;
        const paginated = MOCK_TASKS.slice(start, end);

        res.status(200).json({
            page,
            limit,
            total: MOCK_TASKS.length,
            tasks: paginated
        });
    } catch (err) {
        res.status(500).json({ error: "Internal server error." });
    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description, assignedTo, dueDate, priority, status, isArchived } = req.body;

        if (!title) {
            return res.status(400).json({ success: false, error: "Title is required" });
        }

        const newTask = new Task({
            id: Date.now(),
            title,
            description: description || "",
            assignedTo: assignedTo || "",
            dueDate: dueDate ? new Date(dueDate) : new Date(),
            priority: priority || "medium",
            status: status || "todo",
            isArchived: isArchived || false,
        });

        return res.status(201).json({
            message: "Task created successfully",
            task: newTask,
            total: MOCK_TASKS.length,
        });
    } catch (err) {
        console.error("Error creating task:", err);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
}

