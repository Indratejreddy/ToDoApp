const todos = [
  {
    _id: "63eba0e07052a2e298645ce6",
    toDoTitle: {
      title: "316 ",
      createdAt: "Tue Feb 14 2023 20:23:37 GMT+0530 (India Standard Time)",
      updatedAt: "Tue Feb 14 2023 20:23:37 GMT+0530 (India Standard Time)",
      _id: "63eba0e07052a2e298645ce7",
    },
    toDoTasks: {
      tasks: ["1", "2", "indra"],
      _id: "63eba0e07052a2e298645ce8",
    },
    toDoStatus: {
      status: false,
      createdAt: "Tue Feb 14 2023 20:23:37 GMT+0530 (India Standard Time)",
      updatedAt: "Tue Feb 14 2023 20:23:37 GMT+0530 (India Standard Time)",
      _id: "63eba0e07052a2e298645ce9",
    },
    createdAt: "2023-02-14T14:55:28.853Z",
    updatedAt: "2023-02-14T14:55:28.853Z",
    __v: 0,
  },
  {
    _id: "63eba0e07052a2e298645ce6",
    toDoTitle: {
      title: "36",
      createdAt: "Tue Feb 14 2023 20:23:37 GMT+0530 (India Standard Time)",
      updatedAt: "Tue Feb 14 2023 20:23:37 GMT+0530 (India Standard Time)",
      _id: "63eba0e07052a2e298645ce7",
    },
    toDoTasks: {
      tasks: ["1", "2"],
      _id: "63eba0e07052a2e298645ce8",
    },
    toDoStatus: {
      status: false,
      createdAt: "Tue Feb 14 2023 20:23:37 GMT+0530 (India Standard Time)",
      updatedAt: "Tue Feb 14 2023 20:23:37 GMT+0530 (India Standard Time)",
      _id: "63eba0e07052a2e298645ce9",
    },
    createdAt: "2023-02-14T14:55:28.853Z",
    updatedAt: "2023-02-14T14:55:28.853Z",
    __v: 0,
  },
];

function findInTasks(tasks) {
  for (let task of tasks) {
    if (task.match(RegExp("indra", "gi"))) {
      return true;
    }
  }
  return false;
}

const search = (todos) => {
  return todos.filter(
    (todo) =>
      todo.toDoTitle.title.match(RegExp("indra", "gi")) ||
      findInTasks(todo.toDoTasks.tasks)
  );
};
console.log(search(todos));
