//importing model
const toDoModel = require("../models/ToDoModel");

//creating controller function
const createToDoController = async (req, res) => {
  try {
    //fetching title and tasks from request body
    const { title, tasks, status, email } = req.body;

    //creating a todo in db
    const newToDo = await toDoModel.create({
      toDoTitle: { title },
      toDoTasks: { tasks },
      toDoStatus: { status },
      toDoEmail: { email },
    });

    // sending response back to client.
    res.status(201).json({
      success: true,
      message: " todo is created successfully",
      newToDo,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create todo",
      error: err.message,
    });
    console.log(err.message);
  }
};
module.exports = createToDoController;
