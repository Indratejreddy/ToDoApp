import { useState } from "react";
import EditForm from "./EditForm";
import Task from "./Task";

function ToDoTask({
  toDoTask,
  toDoTaskstatus,
  toDoTaskId,
  toDoId,
  setToDos,
  toDoUrl,
}) {
  const [editMode, setEditMode] = useState(false);
  const taskUrl = toDoUrl + "updateatasktotodo/" + toDoId + "/" + toDoTaskId;
  return (
    <>
      {/* <EditForm/> */}

      {editMode ? (
        <EditForm
          Url={taskUrl}
          data={toDoTask}
          setToDos={setToDos}
          setEditMode={setEditMode}
        />
      ) : (
        <Task
          key={toDoTaskId}
          toDoTask={toDoTask}
          toDoTaskstatus={toDoTaskstatus}
          toDoTaskId={toDoTaskId}
          toDoId={toDoId}
          setToDos={setToDos}
          toDoUrl={toDoUrl}
          setEditMode={setEditMode}
        />
      )}
    </>
  );
}
export default ToDoTask;
