import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({ title: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Input text here"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
        <input type="submit" value="addToDo" />
      </form>
    );
  }
}

export default AddToDo;
