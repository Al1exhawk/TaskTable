import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/tasksActions";
import TableRow from "./TableRow";

class TableTasks extends Component {
  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  render() {
    const { tasks } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Actual effort</th>
              <th>Estimated effort</th>
              <th>Due date</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => {
              return (
                <TableRow
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  actualEffort={task.actual_effort}
                  estimatedEffort={task.estimated_effort}
                  dueDate={task.due_date}
                  tags={task.tags}
                  isHighPriority={task.is_high_priority} //19
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default connect(
  state => ({
    tasks: state.tasks
  }),
  { getTasks }
)(TableTasks);
