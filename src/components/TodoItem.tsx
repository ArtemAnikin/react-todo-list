import { ITodoData } from '../types/dataItem';

import './TodoItem.scss';
import React, { useState } from 'react';

interface ITodoItemProps {
  item: ITodoData;
  deleteTodo: (itemId: number) => void;
  completeTodo: (itemId: number) => void;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const [complete, setComplete] = useState(props.item.complete);

  const { id, title } = props.item;

  const deleteTodo = () => {
    props.deleteTodo(id);
  };

  const changeComplete = () => {
    setComplete(!complete);
    props.completeTodo(id);
  };

  return (
    <div className={`todo-item ${complete ? 'complete' : ''}`} key={id}>
      <div className="item-input">
        <input type="checkbox" onChange={changeComplete} checked={complete} />
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
