import axios from "axios";

export default async function fetchAllToDos(setToDos) {
  try {
    const res = await axios.get("http://localhost:4000/fetchalltodos");
    setToDos((toDos) => res.data.toDos);
  } catch (err) {
    console.error(err);
  }
}
