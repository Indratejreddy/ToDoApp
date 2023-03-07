//importing model
const { translateAliases } = require("../models/ToDoModel");
const toDoModel = require("../models/ToDoModel");

//creating controller function
const deleteATaskFromToDoController = async (req, res) => {
  try {
    const { toDoId, taskId } = req.params;
    let success = false;
    let index = null;
    let taskName = null;

    //validating whether task provided or not.
    if (taskId.length < 1)
      throw new Error("Please provide taskId  to delete a task from todo");

    //finding the todoObject
    const toDoObject = await toDoModel.findOne({ _id: toDoId });

    //finding the task in the db.
    if (toDoObject.toDoTasks.tasks.length > 0) {
      toDoObject.toDoTasks.tasks.forEach((task, taskIndex) => {
        if (task._id == taskId) {
          taskName = task.task;
          index = taskIndex;
          success = true;
        }
      });
    } else {
      throw new Error("There are no tasks to delete from todo");
    }

    //validating and deleting the task from db.
    if (success) {
      toDoObject.toDoTasks.tasks.splice(index, 1);
      await toDoObject.save();
    } else {
      throw new Error(
        "Task doesn't exist to delete. please provide valid taskId to delete "
      );
    }

    //sending response to cilent
    res.status(200).json({
      success: true,
      message: taskName + " task is deleted successfully",
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
module.exports = deleteATaskFromToDoController;
