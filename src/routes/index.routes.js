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

router.get("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);

    res.redirect("/");
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

router.get("/toggleDone/:id", async (req, res) => {
  try {
    const {id} = req.params;

    const task = await Task.findById(id)

    task.done = !task.done;

    task.save()

    res.redirect("/")

  } catch (error) {
    console.log("Error: ", error)
  }
})

export default router;
