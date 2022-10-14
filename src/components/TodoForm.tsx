import React, { useState } from 'react';

import './TodoForm.scss';
import { ITodoData } from '../types/dataItem';

interface ITodoFormProps {
  addTodo: (item: ITodoData) => void;
}

const TodoForm: React.FC<ITodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const createTodo = () => {
    if (value.trim().length > 0) {
      const todo: ITodoData = {
        id: Date.now(),
        title: value,
        complete: false,
      };

      addTodo(todo);
      setValue('');
    }
  };

  return (
    <form className="todo-form">
      <div className="form-input">
        <input
          type="text"
          value={value}
          onChange={(el) => setValue(el.target.value)}
        />
      </div>
      <div className="form-btns">
        <button type="button" onClick={createTodo}>
          add To Do
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
