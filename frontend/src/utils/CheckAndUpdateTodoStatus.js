import updateStatus from "../utils/UpdateStatus";
export default function checkAndUpdateTodoStatus(toDo,toDoStatusUrl,setToDos){
    if(toDo){
    if(toDo.toDoStatus.status!==true && toDo.toDoTasks.tasks.every((task)=> task.status===true) ){
      updateStatus(toDoStatusUrl,toDo.toDoStatus.status, setToDos);
    }else if(toDo.toDoStatus.status!==false && toDo.toDoTasks.tasks.some((task)=> task.status===false)){
      updateStatus(toDoStatusUrl,toDo.toDoStatus.status, setToDos); 
    }
  }
  }