import React from "react";

export default function Todo(props) {
  return (
    <tr className="todos">
      <td>{props.index}</td>
      <td
        className="text-center"
        onClick={() => props.toggleCompleted(props.todo.id)}
      >
        <input
          type="checkbox"
          name="completed"
          onChange={() => props.toggleCompleted(props.todo.id)}
          checked={props.todo.isCompleted}
        />
      </td>
      <td>
        <p
          className={"todo-text " + (props.todo.isCompleted ? "completed" : "")}
        >
          {props.todo.text}
        </p>
      </td>
      <td className="text-center">
        <button
          onClick={() => props.editTodo(props.todo.id)}
          className="btn btn-warning btn-sm"
        >
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
      </td>
      <td className="text-center">
        <button
          onClick={() => props.deleteTodo(props.todo.id)}
          className="btn btn-danger btn-sm"
        >
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  );
}
