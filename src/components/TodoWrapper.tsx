import { ITodoData } from '../types/dataItem';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './TodoWrapper.scss';
import React, { useState } from 'react';

const TodoWrapper: React.FC = () => {
  const [items, setItems] = useState<ITodoData[]>([]);

  const addTodo = (item: ITodoData) => {
    setItems([...items, item]);
  };

  const deleteTodo = (itemId: number) => {
    setItems(items.filter(el => el.id !== itemId));
  }

  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList items={items} deleteTodo={deleteTodo} />
    </div>
  );
};
export { TodoWrapper };
