import React, { useState } from 'react'

import 'components/pages/ui/TodoItem/TodoItem.scss'

import { ITodoData } from 'types/dataItem'

import './EditTodo.scss'

interface IEditTodoProps {
	item: ITodoData
	updateTodo: (itemId: number, itemTitle: string) => void
	order: number
}

const EditTodo: React.FC<IEditTodoProps> = props => {
	const { item, updateTodo, order } = props

	const [value, setValue] = useState(item.title)

	const saveTodo = () => {
		updateTodo(item.id, value)
	}
	const cancelTodo = () => {
		updateTodo(item.id, item.title)
	}

	return (
		<form className='todo-item' style={{ order: order }}>
			<div className='item-input-edit'>
				<input
					type='text'
					value={value}
					onChange={el => setValue(el.target.value)}
				/>
			</div>
			<div className='item-btns'>
				<button onClick={saveTodo}>Save</button>
				<button onClick={cancelTodo}>Cancel</button>
			</div>
		</form>
	)
}

export { EditTodo }
