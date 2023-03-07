//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const getDatesForTitleController = async (req, res) => {
  try {
    const { toDoId } = req.params;

    //updating title for our todo and saving in database
    const toDoObject = await toDoModel.findOne({ _id: toDoId });
    const dates = {
      createdAt: toDoObject.toDoTitle.createdAt,
      updatedAt: toDoObject.toDoTitle.updatedAt,
    };
    res.status(200).json({
      success: true,
      message: "Fetched dates successfully",
      dates,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Unable to perform update/change title",
      error: err.message,
    });
    console.log(err.message);
  }
};
module.exports = getDatesForTitleController;
