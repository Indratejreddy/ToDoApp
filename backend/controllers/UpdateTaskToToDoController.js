//importing model
const toDoModel = require('../models/ToDoModel');

//creating controller function
const updateTaskToToDoController = async (req,res)=>{
    try{

    const {toDoId} = req.params;
    const {oldTaskName,newTaskName} = req.body;
    
    //checking for task names whether it is provided or not 
    if(!oldTaskName && !newTaskName){
        throw new error("Please provide oldTaskName and newTaskNametask to update it");
    }

    //updating a task in tasks array for our todo
    const toDoObject = await toDoModel.findOne({ _id: toDoId });
    const index = toDoObject.toDoTasks.tasks.indexOf(oldTaskName);

    //checking whether task exist in db or not
    if(index===-1) throw new Error("Task doesn't exist to update. please provide valid task");

    //updating or changing the task name
    toDoObject.toDoTasks.tasks[index] = newTaskName;

    // updating the database
    await toDoObject.save();

    res.status(200).json({
        success: true,
        message: "Updated successfully "+oldTaskName+"is changed to "+newTaskName,
        toDoObject
    });

    }
    catch(err){
        res.status(401).json({
            success: false,
            message: "Unable to perform update/change task name",
            error: err.message
        })
        console.log(err.message);
    } 
}
module.exports = updateTaskToToDoController;