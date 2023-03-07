//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const updateTaskStatusController = async (req, res) => {
  try {
    let found = false;
    const { toDoId, taskId } = req.params;
    const { status } = req.body;

    //validating status sent to params
    if (
      status === 0 ||
      status === 1 ||
      status === "0" ||
      status === "1" ||
      status === true ||
      status === false ||
      status === "true" ||
      status === "false"
    ) {
      //updating title for our todo and saving in database
      const toDoObject = await toDoModel.findOne({ _id: toDoId });

      toDoObject.toDoTasks.tasks.forEach((ele) => {
        if (ele._id == taskId) {
          ele.status = status;
          ele.updatedAt = new Date();
          found = true;
        }
      });
      //checking whether task exist in db or not
      if (!found)
        throw new Error(
          "Task doesn't exist to update the status. please provide valid taskId"
        );

      toDoObject.save();

      res.status(200).json({
        success: true,
        message: "Task status is Updated successfully",
        toDoObject,
      });
    } else {
      throw new Error(
        "Please provide status  to update or make sure status sent must be either 0/1 or true/false"
      );
    }
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Unable to perform update/change status of task",
      error: err.message,
    });
    console.log(err.message);
  }
};
module.exports = updateTaskStatusController;
