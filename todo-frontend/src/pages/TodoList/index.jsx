/** @format */

import React, { Component } from 'react';
import Todo from '../../components/Todo/index';
import { getTodos } from '../../services/todo';

class TodosList extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = async () => {
    try{
      const response = await getTodos();

      this.setState({ todos: response.data || [] });
    
    } catch(e) {
      // error handling
    }
  }

  todosList() {
    return this.state.todos.map((currenttodo) => {
      return (
        <Todo
          todo={currenttodo}
          deleteTodo={this.removeTodo}
          key={currenttodo._id}
        />
      );
    });
  }
 
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <br></br>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.todosList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TodosList;
