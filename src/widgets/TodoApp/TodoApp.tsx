import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { TodoForm } from 'components/TodoForm/TodoForm'
import { TodoList } from 'components/TodoList/TodoList'

import { ITodoData } from 'types/dataItem'

import { addTodo } from 'store/actions'

import './TodoApp.scss'

interface ITodoApp {
	items: ITodoData[]
}

const TodoApp: FC<ITodoApp> = ({ items }) => {
	const dispatch = useDispatch()
	const addTodoHandler = (item: ITodoData) => {
		dispatch(addTodo(item))
	}

	return (
		<div className='todo-wrapper'>
			<h1>To Do List</h1>
			<h5>React TS</h5>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList items={items} />
		</div>
	)
}
export { TodoApp }
