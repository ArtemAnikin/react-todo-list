import { FC } from 'react'
import { TodoApp } from 'widgets/TodoApp/TodoApp'

import useLocalStorage from 'hooks/UseLocalStorage'

import { ITodoData } from 'types/dataItem'

const HomePage: FC = () => {
	const [items, setItems] = useLocalStorage<ITodoData[]>('key', [])

	return <TodoApp items={items} setItems={setItems} />
}

export default HomePage
