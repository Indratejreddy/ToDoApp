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

const task = new schema(
    {
    tasks:[{ type: String,trim: true}]
    },
    {
    timestamps: true 
    }
    )   

const toDoSchema = new schema({
    toDoTitle : title,
    toDoTasks: task

    },
    {
    timestamps: true 
    });

const toDoModel = mongoose.model("toDo", toDoSchema);
module.exports = toDoModel;
