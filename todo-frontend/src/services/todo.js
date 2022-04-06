import { TODO,CREATE_TODO } from './client/endpoints';
import { Axios } from './client/index';

// get exervises
export const getTodos = () => {
  return Axios.get(TODO);
};

//add exervises
export const addTodos = (todo) => {
  return Axios.post(CREATE_TODO,todo);
};
