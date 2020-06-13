import React, { Component } from "react";

export default class TodoCreate extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <div className="col-sm-10">
              <input
                type="text"
                name="text"
                onChange={this.handleChange}
                value={this.state.text}
                className="form-control"
                placeholder="add todo"
                required
              />
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary mb-2">
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
