import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import tasks from '../reducers/tasks';

const TaskForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uniqid(),
      text: value,
      complete: false,
    };

    dispatch(tasks.actions.addTask(newTask));
    setValue('');
  };

  return (
    <div className='form-wrapper'>
      <form onSubmit={onFormSubmit} className='form'>
        <input
          className='input'
          type='text'
          value={value}
          maxLength='50'
          required
          onChange={(e) => setValue(e.target.value)}
          placeholder='Add task'
        />
        <button type='submit' className='submit-button'>
          <i className='fas fa-plus'></i>
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
