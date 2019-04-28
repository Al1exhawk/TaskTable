export const getTasks = () => dispatch => {
  const req = new XMLHttpRequest();
  req.open("GET", "tasks.json", true);
  req.send();
  req.onload = () => {
    const Tasks = JSON.parse(req.responseText, (key, value) => {
      if (
        key === "creation_date" ||
        key === "due_date" ||
        key === "start_date"
      ) {
        const d = new Date(value).toUTCString();
        return d;
      }
      return value;
    }).filter(task => {
      return task.obj_status === "active";
    });
    dispatch({
      type: "GET_TASKS",
      payload: Tasks
    });
  };
};

export const getTask = id => dispatch => {
  dispatch({
    type: "GET_TASK",
    payload: id
  });
};

export const renameTask = renamed => dispatch => {
  const req = new XMLHttpRequest();
  req.open("PUT", "tasks.json", true);
  req.send(renamed);
  req.onload = () => {
    dispatch({
      type: "RENAME_TASK",
      payload: renamed
    });
  };
};
