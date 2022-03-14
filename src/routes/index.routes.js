import { Router } from "express";
import {
  renderTask,
  postTask,
  deleteTask,
  editTask,
  editTaskPost,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", postTask);

router.get("/delete/:id", deleteTask);

router.get("/edit/:id", editTask);

router.post("/edit/:id", editTaskPost);

router.get("/toggleDone/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    task.done = !task.done;

    task.save();

    res.redirect("/");
  } catch (error) {
    console.log("Error: ", error);
  }
});

export default router;
