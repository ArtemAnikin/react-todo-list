import {ITodoData} from 'types/dataItem';

import './TodoItem.scss';
import React, {useState} from 'react';
import {EditTodo} from '../EditTodo/EditTodo';

interface ITodoItemProps {
  item: ITodoData;
  deleteTodo: (item: ITodoData) => void;
  completeTodo: (item: ITodoData) => void;
  updateTodo: (item: ITodoData) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({item, ...props}) => {
  const { deleteTodo, updateTodo, completeTodo } = props
  const [complete, setComplete] = useState(item.complete);
  const [edit, setEdit] = useState(false);

  const deleteTodoHandler = () => {
    deleteTodo(item)
  };

  const changeComplete = () => {
    setComplete(!complete);
    completeTodo(item)
  };

  const editTodoHandler = () => {
    setEdit(!edit);
  };

  const newItem = (newItem: ITodoData) => {
    updateTodo(newItem);
    setEdit(!edit);
  };

  if (edit) {
    return (
      <EditTodo item={item} updateTodo={newItem} />
    );
  }

  return (
    <div
      className={`todo-item ${complete ? 'complete' : ''}`}
      key={item.id}
    >
      <div className="item-input">
        <input type="checkbox" onChange={changeComplete} checked={complete} />
      </div>
      <div onClick={complete ? undefined : editTodoHandler} className="item-title">
        {item.title}
      </div>
      <div className="item-btns">
        <button onClick={editTodoHandler}>Edit</button>
        <button onClick={deleteTodoHandler}>Delete</button>
      </div>
    </div>
  );
};
export { TodoItem };
