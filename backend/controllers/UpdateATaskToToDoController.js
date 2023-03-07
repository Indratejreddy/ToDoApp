//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const updateATaskToToDoController = async (req, res) => {
  try {
    let found = false;
    const { toDoId, taskId } = req.params;
    const { data } = req.body;

    //checking for task names whether it is provided or not
    if (!data) {
      throw new error("Please provide oldTaskName and data to update it");
    }

    //updating a task in tasks array for our todo
    const toDoObject = await toDoModel.findOne({ _id: toDoId });
    // const index = toDoObject.toDoTasks.tasks.indexOf(oldTaskName);

    toDoObject.toDoTasks.tasks.forEach((ele) => {
      if (ele._id == taskId) {
        ele.task = data;
        ele.updatedAt = new Date();
        found = true;
      }
    });

    //checking whether task exist in db or not
    if (!found)
      throw new Error(
        "Task doesn't exist to update. please provide valid task"
      );

    // updating the database
    await toDoObject.save();

    res.status(200).json({
      success: true,
      message: "Task is successfully updated to " + data,
      toDoObject,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Unable to perform update/change task name",
      error: err.message,
    });
    console.log(err.message);
  }
};
module.exports = updateATaskToToDoController;
