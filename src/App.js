import React from "react";
import "./App.css";
import TableTasks from "./components/Table";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExactTask from "./components/ExactTask";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={TableTasks} />
            <Route exact path="/:id" component={ExactTask} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
