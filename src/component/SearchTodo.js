import React, { Component } from "react";

export default function SearchTodo({ searchTodo, searchText }) {
  return (
    <div>
      <div className="form-group row mr-0">
        <div className="col-sm-12">
          <input
            type="text"
            name="text"
            onChange={(e) => searchTodo(e.target.value)}
            value={searchText}
            className="form-control"
            placeholder="Search a todo"
            required
          />
        </div>
      </div>{" "}
    </div>
  );
}
