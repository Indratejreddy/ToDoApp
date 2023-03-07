const mongoose = require("mongoose");
const schema = mongoose.Schema;

const title = new schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Title is required to create a ToDo"],
  },
  createdAt: { type: String, trim: true, default: new Date() },
  updatedAt: { type: String, trim: true, default: new Date() },
});

const email = new schema({
  email: {
    type: String,
    trim: true,
    required: [true, "email is required to create a ToDo"],
  },
  createdAt: { type: String, trim: true, default: new Date() },
  updatedAt: { type: String, trim: true, default: new Date() },
});

const tasks = new schema({
  tasks: [
    {
      task: {
        type: String,
        trim: true,
        required: [true, "Atleast one task is required to create a ToDo"],
      },
      status: { type: Boolean, trim: true, default: false },
      createdAt: { type: String, trim: true, default: new Date() },
      updatedAt: { type: String, trim: true, default: new Date() },
    },
  ],
});

const status = new schema({
  status: { type: Boolean, trim: true, default: false },
  createdAt: { type: String, trim: true, default: new Date() },
  updatedAt: { type: String, trim: true, default: new Date() },
});

const toDoSchema = new schema(
  {
    toDoTitle: title,
    toDoTasks: tasks,
    toDoStatus: status,
    toDoEmail: email,
  },
  {
    timestamps: true,
  }
);

const toDoModel = mongoose.model("toDo", toDoSchema);
module.exports = toDoModel;
