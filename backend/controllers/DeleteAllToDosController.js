//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const deleteAllToDosController = async (req, res) => {
  try {
    await toDoModel.deleteMany();
    res.status(200).json({
      success: true,
      message: " All todos is deleted successfully",
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
module.exports = deleteAllToDosController;
