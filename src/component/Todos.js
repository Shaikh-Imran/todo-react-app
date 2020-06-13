import React, { Component } from "react";
import TodoCreate from "./TodoCreate";
import Todo from "./Todo";
import SearchTodo from "./SearchTodo";

export default class Todos extends Component {
  state = {
    filterTodos: [],
    searchText: "",
    todos: [
      {
        id: 1,
        text: "A sample TODO",
        isCompleted: false,
      },
    ],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          text: todo,
          isCompleted: false,
        },
      ],
      searchText: "",
    });
  };

  toggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }),
    });
  };

  editTodo = (todoId) => {
    const todo = this.state.todos.filter((todo) => todo.id === todoId);
    const oldTodoText = todo[0].text;
    const newTodoText = prompt("Please Edit the TODO", oldTodoText);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          text: newTodoText,
        };
      }),
      searchText: "",
    });
  };
  deleteTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== todoId),
    });
  };

  searchTodo = (searchText) => {
    const newTodos =
      searchText === ""
        ? this.state.todos
        : this.state.todos.filter((todo) =>
            todo.text
              .toString()
              .toLowerCase()
              .includes(searchText.toLowerCase())
          );
    this.setState({
      searchText: searchText,
      filterTodos: newTodos,
    });
  };

  renderTodos = () => {
    return this.state.searchText === ""
      ? this.state.todos
      : this.state.filterTodos;
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 row">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <TodoCreate addTodo={this.addTodo} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 pr-0">
            <SearchTodo
              searchText={this.state.searchText}
              searchTodo={this.searchTodo}
            />
          </div>
        </div>

        <div className="col-12 table-responsive">
          <table className="table table-hover">
            <thead>
              <tr
                scope="row"
                className="table-head text-center table-secondary"
              >
                <th scope="col">#</th>
                <th scope="col">
                  <i className="fa fa-check" aria-hidden="true"></i>
                </th>
                <th scope="col">TODO</th>
                <th>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </th>
                <th>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.renderTodos().length === 0 && <h1>No Todos</h1>}
              {this.renderTodos().map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleCompleted={this.toggleCompleted}
                  editTodo={this.editTodo}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
