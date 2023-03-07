import { useState } from "react";
import Title from "./Title";
import EditForm from "./EditForm";

export default function ToDoTitle({
  toDoTitle,
  toDoStatusUrl,
  toDoStatus,
  setToDos,
  toDoUrl,
  toDoId
}) {
  const [editMode, setEditMode] = useState(false);
  const titleUrl = toDoUrl + "updatetitletotodo/" + toDoId;
  const statusColor = toDoStatus && "group-hover:border-green-600";
  return (
    <>
      {editMode ? (
        <EditForm
          Url={titleUrl}
          data={toDoTitle}
          setToDos={setToDos}
          setEditMode={setEditMode}
        />
      ) : (
        <Title
          toDoId={toDoId}
          toDoTitle={toDoTitle}
          toDoStatusUrl={toDoStatusUrl}
          toDoStatus={toDoStatus}
          setToDos={setToDos}
          statusColor={statusColor}
          setEditMode={setEditMode}
        />
      )}
    </>
  );
}
