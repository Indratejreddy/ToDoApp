//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const addATaskToToDoController = async (req, res) => {
  try {
    const { toDoId } = req.params;
    const { task } = req.body;

    if (task.length < 1) {
      throw new error("task is not provided to add it to todo");
    }

    //adding a task to tasks array for our todo and saving.
    const toDoObject = await toDoModel.findOne({ _id: toDoId });
    toDoObject.toDoTasks.tasks.push({ task });
    await toDoObject.save();

    //sending response to cilent.
    res.status(200).json({
      success: true,
      message: task + " task is added successfully",
      toDoObject,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Unable to perform add operation",
      error: err.message,
    });
    console.log(err.message);
  }
};
module.exports = addATaskToToDoController;
