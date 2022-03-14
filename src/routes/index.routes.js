import { Router } from "express";
import { renderTask, postTask, deleteTask} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", postTask);

router.get("/delete/:id", deleteTask);

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
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

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
