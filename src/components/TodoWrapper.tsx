import { ITodoData } from '../types/dataItem';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './TodoWrapper.scss';
import React from 'react';

const TodoWrapper: React.FC = () => {
  const items: ITodoData[] = [
    { id: 1, title: 'Todo 1', complete: false },
    { id: 2, title: 'Todo 2', complete: false },
    { id: 3, title: 'Todo 3', complete: false },
  ];
  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>
      <TodoForm />
      <TodoList items={items} />
    </div>
  );
};
export { TodoWrapper };
