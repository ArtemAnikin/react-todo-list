import { ITodoData } from '../types/dataItem';
import { TodoItem } from './TodoItem';

import './TodoList.scss';
import React from 'react';

interface ITodoListProps {
  items: ITodoData[];
  deleteTodo: (itemId: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {

  const { items , deleteTodo} = props;

  return (
    <div className="todo-list">
      {items.map((todo, index) => (
        <TodoItem key={index} item={todo} deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
};
export { TodoList };
