import { FC, useState } from 'react'

import { ITodoData } from 'types/dataItem'

import './TodoForm.scss'

interface ITodoFormProps {
	addTodo: (item: ITodoData) => void
}

const TodoForm: FC<ITodoFormProps> = ({ addTodo }) => {
	const [value, setValue] = useState('')

	const createTodo = () => {
		if (value.trim().length > 0) {
			const todo: ITodoData = {
				id: Date.now(),
				title: value,
				complete: false
			}

			addTodo(todo)
			setValue('')
		}
	}

	const handleKeyDown = (event: any) => {
		event.preventDefault()
		createTodo()
	}

	return (
		<form
			className='todo-form'
			onKeyDown={el => (el.key === 'Enter' ? handleKeyDown(el) : undefined)}
		>
			<div className='form-input'>
				<input
					type='text'
					value={value}
					onChange={el => setValue(el.target.value)}
				/>
			</div>
			<div className='form-btns'>
				<button type='button' onClick={createTodo}>
					add To Do
				</button>
			</div>
		</form>
	)
}

export { TodoForm }
