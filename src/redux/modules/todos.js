// import uuid from "react-uuid";
import shortid from 'shortid';

const initialState = [
  {
    id: shortid.generate(),
    title: '',
    body: '',
    isDone: false,
  },
];

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SWITCH_TODO = 'SWITCH_TODO';

export const addtodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deletetodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchtodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return action.payload;

    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
        return item;
      });

    default:
      return state;
  }
};

export default todos;
