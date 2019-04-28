import React, { Component } from "react";
import { connect } from "react-redux";
import { getTask, renameTask } from "../actions/tasksActions";
import EditableLabel from "react-inline-editing";

class ExactTask extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTask(id);
  }

  handleFocusOut(text) {
    const renamed = this.props.eTask[0];
    renamed.name = text;
    this.props.renameTask(renamed);
  }
  render() {
    const { eTask } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Proj id</th>
              <th>Actual effort</th>
              <th>Estimated effort</th>
              <th>Сreation date</th>
              <th>Start date</th>
              <th>Due date</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {eTask.map(task => {
              const {
                project_id,
                actual_effort,
                estimated_effort,
                start_date,
                due_date,
                creation_date,
                name,
                description,
                tags
              } = task;

              return (
                <tr key="name" style={{ textAlign: "center" }}>
                  <td>
                    <EditableLabel
                      text={name}
                      onFocusOut={this.handleFocusOut.bind(this)}
                    />
                  </td>
                  <td>
                    {typeof description !== "undefined" ? description : "-"}
                  </td>
                  <td>
                    {typeof project_id !== "undefined" ? project_id : "-"}
                  </td>
                  <td>
                    {typeof actual_effort !== "undefined" ? actual_effort : "-"}
                  </td>
                  <td>
                    {typeof estimated_effort !== "undefined"
                      ? estimated_effort
                      : "-"}
                  </td>
                  <td>
                    {typeof creation_date !== "undefined" ? creation_date : "-"}
                  </td>
                  <td>
                    {typeof start_date !== "undefined" ? start_date : "-"}
                  </td>
                  <td>{typeof due_date !== "undefined" ? due_date : "-"}</td>
                  <td>{typeof tags !== "undefined" ? tags : "-"}</td>
                </tr>
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
    eTask: state.task
  }),
  { getTask, renameTask }
)(ExactTask);
