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
    setItems(items.filter((el) => el.id !== itemId));
  };

  const completeTodo = (itemId: number) => {
    setItems(
      items.map((el) => {
        if (el.id === itemId) {
          el.complete = !el.complete;
        }
        return el;
      })
    );
  };

  const updateTodo = (itemId: number, itemTitle: string) => {
    if (!itemTitle || /^\s*$/.test(itemTitle)) {
      return;
    }
    setItems(
      items.map((el) => {
        if (el.id === itemId) {
          el.title = itemTitle;
        }
        return el;
      })
    );
  };

  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>
        <h5>React TS</h5>
      <TodoForm addTodo={addTodo} />
      <TodoList
        items={items}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};
export { TodoWrapper };
