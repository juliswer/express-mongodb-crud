import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.render("index", {tasks: tasks});
});

router.post("/tasks/add", async (req, res) => {
  const task = Task(req.body);
  await task.save();
  res.redirect("/");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/:id/task/delete", async (req, res) => {
  try {
    const { id } = req.params;
    Task.findByIdAndDelete(id);

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log("Error: " + error.message);
  }
});

router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const data = await Task.findById(id);
  console.log(data);

  res.render("edit");
});

export default router;
