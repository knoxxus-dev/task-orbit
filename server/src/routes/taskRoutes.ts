import { Router } from "express";
import { getTasks, createTask, updateTask } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);

export default router;