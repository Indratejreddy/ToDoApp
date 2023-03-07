import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import ToDosList from "./components/ToDosList";
import AddNewToDo from "./components/AddANewTodo";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import UpdateTaskAndTitle from "./components/UpdateTaskAndTitle";
import EditForm from "./components/EditForm";
import ToDoTitle from "./components/ToDoTitle";
import CreateANewTodo from "./components/CreateANewTodo";
import PageNotFound from "./components/PageNotFound";

export const toDoContext = createContext(null);

function App() {
  const [toDos, setToDos] = useState({});
  const [query, setQuery] = useState("");
  const toDoUrl = "http://localhost:4000/";
  //loading data from server to App component.
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          toDoUrl + "fetchalltodos" + "/" + localStorage.getItem("email")
        );
        setToDos((toDos) => res.data.toDos);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <>
      <toDoContext.Provider
        value={{ toDoUrl, toDos, setToDos, query, setQuery }}
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="home" element={<Home />} />
          <Route path="todoslist/:toDoId" element={<ToDosList />} />
          <Route path="addnewtodo" element={<AddNewToDo />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="UpdateTaskAndTitle" element={<UpdateTaskAndTitle />} />
          <Route path="editform" element={<EditForm />} />
          <Route path="todotitle" element={<ToDoTitle />} />
          <Route path="createanewtodo" element={<CreateANewTodo />} />
          <Route path="register" element={<SignUpPage />} />
        </Routes>
      </toDoContext.Provider>
    </>
  );
}

export default App;