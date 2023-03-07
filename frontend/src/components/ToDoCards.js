import ToDoCard from "../components/ToDoCard";
import AddNewToDo from "./AddANewTodo";
import { useContext } from "react";
import { toDoContext } from "../App";
import { search } from "../utils/Search";
function ToDoCards({ todos }) {
  const { query } = useContext(toDoContext);

  return (
    <>
      <div className="justify-center w-full  justify-items-center gap-6 md:gap-y-10 md:p-8 absolute top-32 font-Lindra grid md:grid-cols-4">
        {query.length > 0
          ? search(todos, query).map((todo) => (
              <ToDoCard
                key={todo._id}
                toDoTitle={todo.toDoTitle.title}
                toDoTasks={todo.toDoTasks.tasks}
                toDoStatus={todo.toDoStatus.status}
                toDoId={todo._id}
              />
            ))
          : todos.map((todo) => (
              <ToDoCard
                key={todo._id}
                toDoTitle={todo.toDoTitle.title}
                toDoTasks={todo.toDoTasks.tasks}
                toDoStatus={todo.toDoStatus.status}
                toDoId={todo._id}
              />
            ))}
        <AddNewToDo />
      </div>
    </>
  );
}
export default ToDoCards;
