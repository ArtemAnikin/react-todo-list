import React, { useEffect, useRef, useState } from 'react'

import { ITodoData } from 'types/dataItem'

import '../TodoItem/TodoItem.scss'

import './EditTodo.scss'

interface IEditTodoProps {
	item: ITodoData
	updateTodo: (item: ITodoData) => void
}

const EditTodo: React.FC<IEditTodoProps> = props => {
	const { item, updateTodo } = props

	const [value, setValue] = useState(item.title)

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (inputRef) {
			inputRef.current?.focus()
		}
	}, [inputRef])

	const saveTodo = () => {
		updateTodo({ id: item.id, title: value, complete: false })
	}
	const cancelTodo = () => {
		updateTodo(item)
	}

	return (
		<form className='todo-item'>
			<div className='item-input-edit'>
				<input
					ref={inputRef}
					type='text'
					value={value}
					onChange={el => setValue(el.target.value)}
				/>
			</div>
			<div className='item-btns'>
				<button type='button' onClick={saveTodo}>
					Save
				</button>
				<button type='button' onClick={cancelTodo}>
					Cancel
				</button>
			</div>
		</form>
	)
}

export { EditTodo }
