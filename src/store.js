import { applyMiddleware, createStore, compose } from "redux";
import tasksReducer from "./reducer/tasksReducer";
import thunk from "redux-thunk";

const store = createStore(
  tasksReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
