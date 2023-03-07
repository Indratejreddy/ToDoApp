import axios from "axios";
import fetchAllToDos from "./FetchAllToDos";

export default async function deleteAToDo(toDoId, setfunction) {
  try {
    console.log("-----deleteTask-- toDoId " + toDoId);
    await axios.delete("http://localhost:4000/deleteatodo/" + toDoId);
    console.log("-------------DeleteAToDo is called-----------");
    fetchAllToDos(setfunction);
  } catch (err) {
    console.error(err);
  }
}
