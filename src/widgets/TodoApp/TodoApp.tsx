import { FC } from 'react'

import { TodoForm } from 'components/TodoForm/TodoForm'
import TodoList from 'components/TodoList/TodoList'

import { useActions } from 'hooks/useActions'

import { ITodoData } from 'types/dataItem'

import './TodoApp.scss'

interface ITodoApp {
	items: ITodoData[]
}

const TodoApp: FC<ITodoApp> = ({ items }) => {
	const { addTodo, deleteTodo, completeTodo, updateTodo } = useActions()

	return (
		<div className='todo-wrapper'>
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
	)
}
export { TodoApp }
