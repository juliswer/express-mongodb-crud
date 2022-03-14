import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  
  const data = await Task.find()

  res.render("index");
});

router.post("/tasks/add", async (req, res) => {
  const task = Task(req.body);
  const savedTask = await task.save()
  console.log(savedTask)
  res.json({
    message: 'Great! Task added successfully. Data: ',
    savedTask
  })
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/:id/edit", async (req, res) => {
  
  const {id} = req.params
  const data = await Task.findById(id)
  console.log(data)
  
  res.render("edit");
});

export default router;
