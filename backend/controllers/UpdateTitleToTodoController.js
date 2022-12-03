//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const updateTittleToToDoController = async (req, res) => {
  try {
    const { toDoId } = req.params;
    const { title } = req.body;

    //validating
    if (!title) throw new Error("Please provide title to update");

    //updating title for our todo and saving in database
    const toDoObject = await toDoModel.findOne({ _id: toDoId });
    if (toDoObject.toDoTitle.title === title)
      throw new Error(
        "title already exist, Please provide different title to update or edit"
      );
    toDoObject.toDoTitle.title = title;
    toDoObject.save();

    res.status(200).json({
      success: true,
      message: "title is Updated successfully",
      toDoObject,
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
module.exports = updateTittleToToDoController;
