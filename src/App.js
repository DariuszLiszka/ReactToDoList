import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/Header";
import Todos from "./components/Todos";
import AddToDo from "./components/AddToDo";
import About from "./pages/About";

import axios from "axios";
class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? (todo.completed = !todo.completed) : console.log(todo)
      )
    });
  };
  delToDo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,

        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="app">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddToDo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delToDo={this.delToDo}
                />
              </React.Fragment>
            )}
          />
          <Route
            path="/about"
            render={props => (
              <React.Fragment>
                <About />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
