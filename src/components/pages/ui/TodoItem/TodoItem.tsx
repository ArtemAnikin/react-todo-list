import { FC, useState } from 'react'

import { EditTodo } from 'components/pages/ui/EditTodo/EditTodo'

import { ITodoData } from 'types/dataItem'

import './TodoItem.scss'

interface ITodoItemProps {
	item: ITodoData
	deleteTodo: (itemId: number) => void
	completeTodo: (itemId: number) => void
	updateTodo: (itemId: number, itemTitle: string) => void
	order: number
}

const TodoItem: FC<ITodoItemProps> = props => {
	const [complete, setComplete] = useState(props.item.complete)
	const [edit, setEdit] = useState(false)

	const { id, title } = props.item

	const deleteTodo = () => {
		props.deleteTodo(id)
	}

	const changeComplete = () => {
		setComplete(!complete)
		props.completeTodo(id)
	}

	const editTodo = () => {
		setEdit(!edit)
	}

	const newItem = (itemId: number, title: string) => {
		props.updateTodo(itemId, title)
		setEdit(!edit)
	}

	if (edit) {
		return (
			<EditTodo item={props.item} updateTodo={newItem} order={props.order} />
		)
	}

	return (
		<div
			className={`todo-item ${complete ? 'complete' : ''}`}
			style={{ order: props.order }}
			key={id}
		>
			<div className='item-input'>
				<input type='checkbox' onChange={changeComplete} checked={complete} />
			</div>
			<div onClick={complete ? undefined : editTodo} className='item-title'>
				{title}
			</div>
			<div className='item-btns'>
				<button onClick={editTodo}>Edit</button>
				<button onClick={deleteTodo}>Delete</button>
			</div>
		</div>
	)
}
export { TodoItem }
