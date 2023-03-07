const toDosPerPage = async (page, limit, toDosObject) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const toDos = toDosObject.slice(startIndex, endIndex);
  const results = {
    previousPage: startIndex > 0 ? page - 1 : "",
    nextPage: endIndex < toDosObject.length ? page + 1 : "",
    toDos: toDos,
  };
  console.log(toDosObject.length);
  return results;
};
module.exports = toDosPerPage;
