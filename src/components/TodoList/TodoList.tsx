import React from 'react'

import { ITodoData } from 'types/dataItem'

import { TodoItem } from '../TodoItem/TodoItem'

import './TodoList.scss'

function isEmpty(items: ITodoData[]) {
	if (!items.length) {
		return (
			<div className='empty-todos'>
				<h1> Can't find any To Do</h1>
			</div>
		)
	} else {
		return items.map((todo, index) => <TodoItem key={index} item={todo} />)
	}
}

const TodoList: React.FC<{ items: ITodoData[] }> = ({ items }) => {
	return <div className='todo-list'>{isEmpty(items)}</div>
}
export { TodoList }
