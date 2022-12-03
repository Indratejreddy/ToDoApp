//importing model
const toDoModel = require("../models/ToDoModel");

//importing utils function
const toDosPerPage = require("../utlis/ToDosPerPage");

const paginationController = async (req, res) => {
  try {
    const toDosArray = await toDoModel.find({});
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1;
    const toDosArrayPerPage = await toDosPerPage(page, limit, toDosArray);

    res.status(200).json({
      success: true,
      message: "Successfully fetched todos",
      result: toDosArrayPerPage,
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
module.exports = paginationController;
