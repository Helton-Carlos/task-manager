import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/task.controllers";

const router = Router();

router.post("/created-task", createTask);
router.get("/get-all-task", getAllTasks);

export default router;
