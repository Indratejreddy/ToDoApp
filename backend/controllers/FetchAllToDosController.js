//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const fetchAllToDosController = async (req, res) => {
  try {
    const toDos = await toDoModel.find({});
    res.status(200).json({
      success: true,
      message: "updated successfully",
      toDos,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Failed to fetch todo's",
      error: err.message,
    });
    console.log(err.message);
  }
};
module.exports = fetchAllToDosController;
