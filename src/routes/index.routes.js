import { Router } from "express";
import {
  renderTask,
  postTask,
  deleteTask,
  editTask,
  editTaskPost,
  toggleDone,
} from "../controllers/tasks.controller";

const router = Router();

// RENDER TASKS
router.get("/", renderTask);

// POST TASK
router.post("/tasks/add", postTask);

// EDIT TASK
router.get("/edit/:id", editTask);
router.post("/edit/:id", editTaskPost);

// DELETE TASK
router.get("/delete/:id", deleteTask);

// TOGGLE DONE FROM A TASK
router.get("/toggleDone/:id", toggleDone);

export default router;
