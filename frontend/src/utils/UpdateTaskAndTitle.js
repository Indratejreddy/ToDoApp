import axios from "axios";
import fetchAllToDos from "./FetchAllToDos";

export default async function updateTaskAndTitle(url, data, setfunction) {
  try {
    await axios.put(url, {
      data: data,
    });
    console.log("-------------updateTaskAndTitle is called-----------");
    fetchAllToDos(setfunction);
  } catch (err) {
    console.error(err);
  }
}
