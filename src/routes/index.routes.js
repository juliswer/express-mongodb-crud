import { Router } from "express";
import {
  renderTask,
  postTask,
  deleteTask,
  editTask,
  editTaskPost,
  toggleDone
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", postTask);

router.get("/delete/:id", deleteTask);

router.get("/edit/:id", editTask);

router.post("/edit/:id", editTaskPost);

router.get("/toggleDone/:id", toggleDone);

export default router;
