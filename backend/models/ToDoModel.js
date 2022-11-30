const mongoose = require("mongoose");
const schema = mongoose.Schema;

const title = new schema(
    {
       title:{ 
        type: String,
        trim: true
        }

    },
    {
        timestamps: true 
    }

    );

const tasks = new schema(
    {
    tasks:[{ type: String,trim: true}]
    },
    {
    timestamps: true 
    }
    )   

const toDoSchema = new schema({
    toDoTitle : title,
    toDoTasks: tasks

    },
    {
    timestamps: true 
    });

const toDoModel = mongoose.model("toDo", toDoSchema);
module.exports = toDoModel;
