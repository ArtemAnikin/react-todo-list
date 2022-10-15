import React, { useState } from 'react';
import './TodoItem.scss';
import './EditTodo.scss';
import { ITodoData } from '../types/dataItem';

interface IEditTodoProps {
  item: ITodoData;
  updateTodo: (itemId: number, itemTitle: string) => void;
}

const EditTodo: React.FC<IEditTodoProps> = (props) => {
  const { item, updateTodo } = props;

  const [value, setValue] = useState(item.title);

  const saveTodo = () => {
    updateTodo(item.id, value);
  };
  const cancelTodo = () => {
    updateTodo(item.id, item.title);
  };

  return (
    <form className="todo-item">
      <div className="item-input-edit">
        <input
          type="text"
          value={value}
          onChange={(el) => setValue(el.target.value)}
        />
      </div>
      <div className="item-btns">
        <button onClick={saveTodo}>Save</button>
        <button onClick={cancelTodo}>Cancel</button>
      </div>
    </form>
  );
};

export { EditTodo };
