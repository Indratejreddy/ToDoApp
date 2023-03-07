// //importing model
// const toDoModel = require("../models/ToDoModel");

// //creating controller function
// const deleteAllTasksToToDoController = async (req, res) => {
//   try {
//     const { toDoId } = req.params;

//     const toDoObject = await toDoModel.findOne({ _id: toDoId });

//     //checking whether toDoId exist in db or not.
//     if (!toDoObject)
//       throw new Error("Invalid id, Please provide proper toDoId");

//     //deleting/emptying all the tasks
//     toDoObject.toDoTasks.tasks = [];

//     // updating the database
//     await toDoObject.save();

//     res.status(200).json({
//       success: true,
//       message: " All tasks are deleted successfully",
//       toDoObject,
//     });
//   } catch (err) {
//     res.status(401).json({
//       success: false,
//       message: "Unable to perform delete operation",
//       error: err.message,
//     });
//     console.log(err.message);
//   }
// };
// module.exports = deleteAllTasksToToDoController;
