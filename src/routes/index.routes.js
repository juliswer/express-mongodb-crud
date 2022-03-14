import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
});

router.post("/tasks/add", async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id/task/delete", async (req, res) => {
  try {
    const { id } = req.params;
    Task.findByIdAndDelete(id);

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log("Error: " + error.message);
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log("Error: " + error.message);
  }
});

router.post("/edit/:id", async (req, res) => {

  try {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect("/");
  } catch (error) {
    console.log(error)
  }
});

export default router;
