import { Request, Response } from "express";
import { MOCK_TASKS } from "../models/MockTasks";

export const getTasks = (req: Request, res: Response) => {
    res.status(200).json(MOCK_TASKS);
}

export const createTask = (req: Request, res: Response) => {

}

