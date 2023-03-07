//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const updateTittleToToDoController = async (req, res) => {
  try {
    const { toDoId } = req.params;
    const { data } = req.body;

    //validating
    if (!data) throw new Error("Please provide data to update");

    //updating title for our todo and saving in database
    const toDoObject = await toDoModel.findOne({ _id: toDoId });
    if (toDoObject.toDoTitle.title === data)
      throw new Error(
        "title already exist, Please provide different title to update or edit"
      );
    toDoObject.toDoTitle.title = data;
    toDoObject.toDoTitle.updatedAt = new Date();
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
