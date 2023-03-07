const express = require("express");
const router = express.Router();

const createToDo = require("../controllers/CreateToDoController");
const deleteAToDo = require("../controllers/DeleteAToDoController");
const fetchAllToDos = require("../controllers/FetchAllToDosController");
const deleteAllToDos = require("../controllers/DeleteAllToDosController");
const updateToDoStatus = require("../controllers/UpdateToDoStatusController");

const updateTitleToToDo = require("../controllers/UpdateTitleToTodoController");

const addATaskToToDo = require("../controllers/AddATaskToToDoController");
const deleteATaskFromToDo = require("../controllers/DeleteATaskFromToDoController");
const updateATaskToToDo = require("../controllers/UpdateATaskToToDoController");
// const deleteAllTasksToToDo = require("../controllers/DeleteAllTasksToToDoController");
const updateTaskStatus = require("../controllers/UpdateTaskStatusController");

//dates
const dates = require("../controllers/GetDatesController");
const titleDates = require("../controllers/GetDatesForTitleController");
const taskDates = require("../controllers/GetDatesForTasksController");

//search
// const search = require("../controllers/SearchController");

// //pagination
// const page = require("../controllers/PaginationController");

router.get("/", (req, res) => {
  res.send("<h1>Welcome to Todo's Home Page</h1>");
});

//todo route
router.post("/createtodo", createToDo); //working
router.delete("/deleteatodo/:toDoId", deleteAToDo); // working
router.get("/fetchalltodos/:email", fetchAllToDos); //working
router.delete("/deletealltodos", deleteAllToDos); //working
router.put("/updatetodostatus/:toDoId", updateToDoStatus); //working
router.put("/updatetitletotoDo/:toDoId", updateTitleToToDo); //working

//task route
router.put("/addatasktotodo/:toDoId", addATaskToToDo); //working
router.delete("/deleteataskfromtodo/:toDoId/:taskId", deleteATaskFromToDo); //working
// router.delete("/deletealltaskstotodo/:toDoId", deleteAllTasksToToDo);
router.put("/updateatasktotodo/:toDoId/:taskId", updateATaskToToDo); //working
router.put("/updatetaskstatus/:toDoId/:taskId", updateTaskStatus); //working

//dates
// router.get("/getdates/:toDoId", dates);
// router.get("/gettitledates/:toDoId", titleDates);
// router.get("/gettasksdates/:toDoId", taskDates);

//search
// router.get("/search", search);

//page
// router.get("/page",page);

module.exports = router;
