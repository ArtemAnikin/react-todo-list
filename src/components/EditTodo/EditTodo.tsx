import React, {useState} from 'react';
import '../TodoItem/TodoItem.scss';
import './EditTodo.scss';
import {ITodoData} from 'types/dataItem';

interface IEditTodoProps {
  item: ITodoData;
  updateTodo: (item:ITodoData) => void;
}

const EditTodo: React.FC<IEditTodoProps> = ({item,updateTodo}) => {

  const [value, setValue] = useState(item.title);

  const saveTodo = () => {
    updateTodo({...item, title:value});
  };
  const cancelTodo = () => {
    updateTodo(item);
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
