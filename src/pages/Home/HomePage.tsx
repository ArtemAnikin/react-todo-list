import { FC } from 'react'
import { useSelector } from 'react-redux'
import { TodoApp } from 'widgets/TodoApp/TodoApp'

const HomePage: FC = () => {
	const items = useSelector(state => state)

	// @ts-ignore
	return <TodoApp items={items} />
}

export default HomePage
