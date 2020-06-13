import React, { Component } from "react";
import TodoCreate from "./TodoCreate";
import Todo from "./Todo";
import SearchTodo from "./SearchTodo";

export default class Todos extends Component {
  state = {
    filterTodos: [],
    searchText: "",
    todos: [],
  };

  componentDidMount() {
    this.addTodo("Sample TODO");
  }

  addTodo = (todo) => {
    const id = new Date().getTime();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: id,
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
    const oldTodoText = todo[0].text.toString();
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

  todosToRender = () => {
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
              <tr className="table-head text-center table-secondary">
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
              {this.todosToRender().length === 0 && <h1>No Todos</h1>}
              {this.todosToRender().map((todo, index) => (
                <Todo
                  key={todo.id}
                  index={index + 1}
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
