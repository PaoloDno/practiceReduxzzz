import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

const AddTodo = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      dispatch(addTodo({ name, text, deadline }));
      setName('');
      setText('');
      setDeadline('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todo Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="Deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
