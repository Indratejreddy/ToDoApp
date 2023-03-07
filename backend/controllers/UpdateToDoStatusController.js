//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const updateToDoStatusController = async (req, res) => {
  try {
    const { toDoId } = req.params;
    const { status } = req.body;

    //validating
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

      toDoObject.toDoStatus.status = status;
      toDoObject.toDoStatus.updatedAt = new Date();
      toDoObject.save();

      res.status(200).json({
        success: true,
        message: "title is Updated successfully",
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
      message: "Unable to perform update/change title",
      error: err.message,
    });
    console.log(err.message);
  }
};
module.exports = updateToDoStatusController;
