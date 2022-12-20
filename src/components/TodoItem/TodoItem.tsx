import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ITodoData } from 'types/dataItem'

import { completeTodo, removeTodo, updateTodo } from 'store/actions'

import { EditTodo } from '../EditTodo/EditTodo'

import './TodoItem.scss'

interface ITodoItemProps {
	item: ITodoData
}

const TodoItem: React.FC<ITodoItemProps> = ({ item }) => {
	const [edit, setEdit] = useState(false)
	const dispatch = useDispatch()

	const deleteTodoHandler = () => {
		dispatch(removeTodo(item))
	}

	const changeComplete = () => {
		dispatch(completeTodo(item))
	}

	const editTodoHandler = () => {
		setEdit(!edit)
	}

	const newItem = (item: ITodoData) => {
		dispatch(updateTodo(item))
		setEdit(!edit)
	}

	if (edit) {
		return <EditTodo item={item} updateTodo={newItem} />
	}

	return (
		<div
			className={`todo-item ${item.complete ? 'complete' : ''}`}
			key={item.id}
		>
			<div className='item-input'>
				<input
					type='checkbox'
					onChange={changeComplete}
					checked={item.complete}
				/>
			</div>
			<div
				onClick={item.complete ? undefined : editTodoHandler}
				className='item-title'
			>
				{item.title}
			</div>
			<div className='item-btns'>
				<button onClick={editTodoHandler}>Edit</button>
				<button onClick={deleteTodoHandler}>Delete</button>
			</div>
		</div>
	)
}
export { TodoItem }
