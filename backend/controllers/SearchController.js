//importing model
const toDoModel = require("../models/ToDoModel");

//importing utils function
const toDosPerPage = require("../utlis/ToDosPerPage");

const searchController = async (req, res) => {
  try {
    const { filter } = req.query;
    if (!filter)
      throw new Error("Please provide Something in filter to search");
    const filteredArray = await toDoModel.find({
      $or: [
        { "toDoTitle.title": new RegExp(filter, "i") },
        { "toDoTasks.tasks": new RegExp(filter, "i") },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Successfully fetched todos",
      filteredArray,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Some error occuried",
      error: err.message,
    });
    console.log(err.message);
  }
};
module.exports = searchController;
