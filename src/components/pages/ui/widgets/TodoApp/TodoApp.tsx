import { FC } from 'react'

import { TodoForm } from 'components/pages/ui/TodoForm/TodoForm'
import { TodoList } from 'components/pages/ui/TodoList/TodoList'

import useLocalStorage from 'hooks/UseLocalStorage'

import { ITodoData } from 'types/dataItem'

import './TodoApp.scss'

const TodoApp: FC = () => {
	const [items, setItems] = useLocalStorage<ITodoData[]>('key', [])

	const addTodo = (item: ITodoData) => {
		setItems([...items, item])
	}

	const deleteTodo = (itemId: number) => {
		setItems(items.filter((el: ITodoData) => el.id !== itemId))
	}

	const completeTodo = (itemId: number) => {
		setItems(
			items.map((el: ITodoData) => {
				if (el.id === itemId) {
					el.complete = !el.complete
				}
				return el
			})
		)
	}

	const updateTodo = (itemId: number, itemTitle: string) => {
		if (!itemTitle || /^\s*$/.test(itemTitle)) {
			return
		}
		setItems(
			items.map((el: ITodoData) => {
				if (el.id === itemId) {
					el.title = itemTitle
				}
				return el
			})
		)
	}

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
