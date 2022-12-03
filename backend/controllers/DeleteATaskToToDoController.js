//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const deleteATaskToToDoController = async (req, res) => {
  try {
    const { toDoId, task } = req.params;

    //validating whether task provided or not.
    if (!task) throw new Error("Please provide task which you want to delete");

    const toDoObject = await toDoModel.findOne({ _id: toDoId });
    const index = toDoObject.toDoTasks.tasks.indexOf(task);

    //checking whether task exist in db or not.
    if (index === -1) throw new Error("Task doesn't exist to delete ");

    //if task exist then we are deleting the task
    toDoObject.toDoTasks.tasks.splice(index, 1);

    // updating the database
    await toDoObject.save();

    res.status(200).json({
      success: true,
      message: task + " task is deleted successfully",
      toDoObject,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Unable to perform delete operation",
      error: err.message,
    });
    console.log(err.message);
  }
};
module.exports = deleteATaskToToDoController;
