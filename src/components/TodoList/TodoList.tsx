import React from 'react'

import { ITodoData } from 'types/dataItem'

import { TodoItem } from '../TodoItem/TodoItem'

import './TodoList.scss'

interface ITodoListProps {
	items: ITodoData[]
	deleteTodo: (item:ITodoData) => void
	completeTodo: (item:ITodoData) => void
	updateTodo: (item:ITodoData) => void
}

const TodoList: React.FC<ITodoListProps> = ({
	items,
	deleteTodo,
	updateTodo,
	completeTodo
}) => {
	return (
		<div className='todo-list'>
			{items.length ? (
				items.map((item, index) => (
					<TodoItem
						key={index}
						item={item}
						updateTodo={updateTodo}
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
					/>
				))
			) : (
				<div className='empty-todos'>
					<h1> Can't find any To Do</h1>
				</div>
			)}
		</div>
	)
}

export default TodoList
