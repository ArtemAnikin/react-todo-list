import { ITodoData } from '../types/dataItem';

import './TodoItem.scss';
import React from 'react';

const TodoItem: React.FC<ITodoData> = (props) => {
  const { id, title } = props;

  return (
    <div className="todo-item" key={id}>
      <div className="item-input">
        <input type="checkbox" />
      </div>
      {title}
      <div className="item-btns">
        <button> Edit </button>
        <button> Delete</button>
      </div>
    </div>
  );
};
export { TodoItem };
