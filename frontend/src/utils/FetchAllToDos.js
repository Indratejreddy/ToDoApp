import axios from "axios";

export default async function fetchAllToDos(setToDos) {
  try {
    const res = await axios.get(
      "http://localhost:4000/fetchalltodos/" + localStorage.getItem("email")
    );
    setToDos((toDos) => res.data.toDos);
  } catch (err) {
    console.error(err);
  }
}
