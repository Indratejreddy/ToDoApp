const express = require("express");
const router = express.Router();

const createToDo = require("../controllers/CreateToDoController");
const deleteAToDo = require("../controllers/DeleteAToDoController");
const fetchAllToDos= require("../controllers/FetchAllToDosController");
const deleteAllToDos = require("../controllers/DeleteAllToDosController");

const updateTitleToToDo = require("../controllers/UpdateTitleToTodoController");

const addTaskToToDo = require("../controllers/AddTaskToToDoController");
const deleteATaskToToDo = require("../controllers/DeleteATaskToToDoController");
const updateTaskToToDo = require("../controllers/UpdateTaskToToDoController");
const deleteAllTasksToToDo = require("../controllers/DeleteAllTasksToToDoController");


//dates
const dates = require("../controllers/GetDatesController");
const titleDates = require("../controllers/GetDatesForTitleController");
const taskDates = require("../controllers/GetDatesForTasksController");

//search

const search = require("../controllers/SearchController")



//pagination
const page = require("../controllers/PaginationController")


router.get("/",(req,res)=>{
    res.send("<h1>Welcome to Todo's Home Page</h1>");
})

//todo route
router.post("/createtodo",createToDo);
router.delete("/deleteatodo/:toDoId",deleteAToDo);
router.get("/fetchalltodos",fetchAllToDos);
router.delete("/deletealltodos",deleteAllToDos);
//title route
router.put("/updatetitletotoDo/:toDoId",updateTitleToToDo);

//task route
router.put("/addtasktotodo/:toDoId",addTaskToToDo);
router.delete("/deleteatasktotodo/:toDoId/:task",deleteATaskToToDo);
router.delete("/deletealltaskstotodo/:toDoId",deleteAllTasksToToDo);
router.put("/updatetasktotodo/:toDoId",updateTaskToToDo);

//dates
router.get("/getdates/:toDoId",dates);
router.get("/gettitledates/:toDoId",titleDates);
router.get("/gettasksdates/:toDoId",taskDates);




//search
router.get("/search",search);

//page
// router.get("/page",page);

module.exports = router;