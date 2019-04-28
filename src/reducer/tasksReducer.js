const initialState = {
  tasks: [],
  task: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload
      };
    case "GET_TASK":
      return {
        ...state,
        task: state.tasks.filter(task => {
          return task.id == action.payload;
        })
      };
    case "RENAME_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id == action.payload.id ? action.payload : task
        )
      };
    default:
      return state;
  }
};
export default tasksReducer;
