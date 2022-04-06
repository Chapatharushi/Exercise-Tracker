/** @format */

import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addTodos } from '../../services/todo';
class CreateTodo extends Component {
  state = {
    username: '',
    description: '',
    duration: 1,
    date: new Date()
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };
  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    try {
      const response = await addTodos(todo);
      // success scenario handle here
      if (response.data) {
      //  console.log(response.data);
      }

    } catch(ex) {
      // error handling
      // show proper error message to user
    }
   
    this.setState({ username: '' });
    this.setState({ description: '' });
    this.setState({ duration: '' });
    this.setState({ date: new Date() });
  };

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username :</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Description :</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration ( In minutes) :</label>
            <input
              type="number"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date :</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
