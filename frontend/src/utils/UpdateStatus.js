import axios from "axios";
import fetchAllToDos from "./FetchAllToDos"

export default async function updateStatus(url,status,setfunction) {
  try {
    await axios.put(url, {
      status: !status,
    });
    console.log("--------------UPFAE STATUS IS Called-----------")
    fetchAllToDos(setfunction);

  } catch (err) {
    console.error(err);
  }
}
