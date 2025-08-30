import { Router } from "express";
import { getTasks, createTask, updateTask, getTaskById } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);

export default router;