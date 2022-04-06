import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => (
  <tr>
    <td>{props.todo.username}</td>
    <td>{props.todo.description}</td>
    <td>{props.todo.duration}</td>
    <td>{props.todo.date.substring(0, 10)}</td>
  </tr>
);

Todo.propTypes = {
  deleteTodo: PropTypes.func,
  todo: PropTypes.shape({
    _id: PropTypes.any,
    date: PropTypes.shape({
      substring: PropTypes.date
    }),
    description: PropTypes.string,
    duration: PropTypes.string,
    username: PropTypes.string
  })
};
export default Todo;
