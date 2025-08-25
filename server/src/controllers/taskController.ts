import { Request, Response } from "express";
import { MOCK_TASKS } from "../models/MockTasks";
import Task from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
    try {
        return res.status(200).json(MOCK_TASKS);
    } catch (Error) {
        return res.status(500).json({ error: "Internal Server Error." });
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
            task: newTask,
        });
    } catch (err) {
        console.error("Error creating task:", err);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
}

