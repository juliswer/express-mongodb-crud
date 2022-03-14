import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const postTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    res.send(error);
  }
};
