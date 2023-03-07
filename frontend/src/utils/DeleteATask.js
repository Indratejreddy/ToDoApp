import axios from "axios";
import fetchAllToDos from "./FetchAllToDos";

export default async function deleteATask(toDoId, taskId, setfunction) {
  try {
    console.log("-----deleteTask-- toDoId " + toDoId + " taskId " + taskId);
    await axios.delete(
      "http://localhost:4000/deleteataskfromtodo/" + toDoId + "/" + taskId
    );
    console.log("-------------Add task is called-----------");
    fetchAllToDos(setfunction);
  } catch (err) {
    console.error(err);
  }
}
