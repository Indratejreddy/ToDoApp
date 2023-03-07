import axios from "axios";
import fetchAllToDos from "./FetchAllToDos";

export default async function addATask(toDoId, task, setfunction) {
  try {
    await axios.put("http://localhost:4000/addatasktotodo/" + toDoId, {
      task: task,
    });
    console.log("-------------Add task is called-----------");
    fetchAllToDos(setfunction);
  } catch (err) {
    console.error(err);
  }
}
