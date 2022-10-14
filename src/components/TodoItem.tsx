import { ITodoData } from '../types/dataItem';

import './TodoItem.scss';
import React, { useState } from 'react';
import { TodoForm } from './TodoForm';

interface ITodoItemProps {
  item: ITodoData;
  deleteTodo: (itemId: number) => void;
  completeTodo: (itemId: number) => void;
  updateTodo: (itemId: number, itemTitle: string) => void;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const [complete, setComplete] = useState(props.item.complete);
  const [edit, setEdit] = useState(false);

  const { id, title } = props.item;

  const deleteTodo = () => {
    props.deleteTodo(id);
  };

  const changeComplete = () => {
    setComplete(!complete);
    props.completeTodo(id);
  };

  const editTodo = () => {
    setEdit(!edit);
  };

  const newItem = (item: ITodoData) => {
    props.updateTodo(id, item.title);
    setEdit(!edit);
  };

  if (edit) {
    return <TodoForm addTodo={newItem} />;
  }

  return (
    <div className={`todo-item ${complete ? 'complete' : ''}`} key={id}>
      <div className="item-input">
        <input type="checkbox" onChange={changeComplete} checked={complete} />
      </div>
      {title}
      <div className="item-btns">
        <button onClick={editTodo} disabled={complete}>
          Edit
        </button>
        <button onClick={deleteTodo} disabled={complete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export { TodoItem };
