import { createSlice } from '@reduxjs/toolkit';
import { formatISO, set } from 'date-fns';

const initialState = [
  {
    id: 1,
    name: "Maligo",
    dateCreated: formatISO(new Date()),
    text: "Maligo bago matulog",
    deadline: formatISO(set(new Date(), { hours: 23, minutes: 0, seconds: 0 })),
    completed: false
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        dateCreated: formatISO(new Date()),
        text: action.payload.text,
        deadline: action.payload.deadline,
        completed: false
      });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateDeadline: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.deadline = action.payload.deadline;
      }
    }
  },
  },
);

export const { addTodo, removeTodo, toggleTodo, updateDeadline } = todosSlice.actions;
export default todosSlice.reducer;