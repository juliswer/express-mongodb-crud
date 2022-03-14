import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: String,
  description: String,
  done: Boolean,
}, {
    timestamps: true,
});

export default model("Task", TaskSchema);
