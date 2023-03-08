import axios from "axios";

async function fetchAllToDos(setToDos, toDoId) {
  try {
    const res = await axios.get(
      "http://localhost:4000/fetchalltodos" +
        "/" +
        localStorage.getItem("email")
    );
    setToDos((toDos) => res.data.toDos);
  } catch (err) {
    console.error(err);
  }
}

export default async function createAToDo(url, title, tasks, setfunction) {
  try {
    const res = await axios.post(url, {
      title: title,
      tasks: tasks,
      email: localStorage.getItem("email"),
    });
    fetchAllToDos(setfunction, res.data.newToDo._id);
  } catch (err) {
    console.error(err);
  }
}
