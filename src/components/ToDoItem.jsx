import React, { Component } from "react";
import PropTypes from "prop-types";

export class ToDoItem extends Component {
  setStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { title, id } = this.props.todo;
    return (
      <div style={this.setStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delToDo.bind(this, id)}>x</button>
        </p>
      </div>
    );
  }
}

export default ToDoItem;

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
