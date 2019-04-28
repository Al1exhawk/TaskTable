import React from "react";
import { Link } from "react-router-dom";

const TableRow = props => {
  const {
    id,
    name,
    actualEffort,
    estimatedEffort,
    dueDate,
    tags,
    isHighPriority
  } = props;

  return (
    <tr style={isHighPriority === true ? { backgroundColor: "#ffb3d9" } : null}>
      <td>
        <Link to={`/${id}`}>{name}</Link>
      </td>
      <td>{typeof actualEffort !== "undefined" ? actualEffort : "-"}</td>
      <td>{typeof estimatedEffort !== "undefined" ? estimatedEffort : "-"}</td>
      <td>{typeof dueDate !== "undefined" ? dueDate : "-"}</td>
      <td>{typeof tags !== "undefined" ? tags : "-"}</td>
    </tr>
  );
};

export default TableRow;
