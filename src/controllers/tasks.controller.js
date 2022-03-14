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

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);

    res.redirect("/");
  } catch (error) {
    console.log("Error: " + error.message);
  }
};

export const editTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log("Error: " + error.message);
  }
};

export const editTaskPost = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const toggleDone = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    task.done = !task.done;

    task.save();

    res.redirect("/");
  } catch (error) {
    console.log("Error: ", error);
  }
};
