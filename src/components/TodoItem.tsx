import { ITodoData } from '../types/dataItem';

import './TodoItem.scss';
import React from 'react';

interface ITodoItemProps {
    item: ITodoData,
    deleteTodo: (itemId: number) => void
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { id, title } = props.item;

  const deleteTodo = () => {
      props.deleteTodo(id);
  }

  return (
    <div className="todo-item" key={id}>
      <div className="item-input">
        <input type="checkbox" />
      </div>
      {title}
      <div className="item-btns">
        <button> Edit </button>
        <button onClick={deleteTodo}> Delete</button>
      </div>
    </div>
  );
};
export { TodoItem };
