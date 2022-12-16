import { FC } from 'react'

import { ITodoData } from 'types/dataItem'

import { TodoItem } from '../TodoItem/TodoItem'

import './TodoList.scss'

interface ITodoListProps {
	items: ITodoData[]
	deleteTodo: (itemId: number) => void
	completeTodo: (itemId: number) => void
	updateTodo: (itemId: number, ItemTitle: string) => void
}

const TodoList: FC<ITodoListProps> = props => {
	return <div className='todo-list'>{isEmpty(props)}</div>
}
export { TodoList }

function isEmpty(props: ITodoListProps) {
	const { items, deleteTodo, completeTodo, updateTodo } = props

	if (!items.length) {
		return (
			<div className='empty-todos'>
				<h1> Can't find any To Do</h1>
			</div>
		)
	} else {
		return items.map((todo, index) => (
			<TodoItem
				key={index}
				order={changeOrder(items, index)}
				item={todo}
				deleteTodo={deleteTodo}
				completeTodo={completeTodo}
				updateTodo={updateTodo}
			/>
		))
	}
}

function changeOrder(items: ITodoData[], index: number) {
	let counter = -1

	if (items[index].complete) {
		counter++
		return items.length - counter
	}
	return index
}
