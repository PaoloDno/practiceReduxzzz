import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.name} - {todo.text} (Created: {todo.dateCreated}) {todo.deadline && `(Deadline: ${todo.deadline})`}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
