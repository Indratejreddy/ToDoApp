//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const deleteAToDoController = async (req, res) => {
  try {
    const { toDoId } = req.params;
    await toDoModel.findOneAndDelete({ _id: toDoId });
    res.status(200).json({
      success: true,
      message: " todo is deleted successfully",
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
module.exports = deleteAToDoController;
