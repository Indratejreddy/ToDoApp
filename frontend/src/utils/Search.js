// for each task it search whether regular expression is matching or not.
//return boolean value either true or false

function findInTasks(tasks, query) {
  for (let task of tasks) {
    if (task.task.match(RegExp(query, "gi"))) {
      console.log(query);
      return true;
    }
  }
  return false;
}

//checks for title and tasks whether regular expression is matching or not.
export const search = (todos, query) => {
  return todos.filter(
    (todo) =>
      todo.toDoTitle.title.match(RegExp(query, "gi")) ||
      findInTasks(todo.toDoTasks.tasks, query)
  );
};
