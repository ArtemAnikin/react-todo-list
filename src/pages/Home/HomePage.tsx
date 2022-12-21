import { FC } from 'react'
import { TodoApp } from 'widgets/TodoApp/TodoApp'

import { useTypedSelector } from 'hooks/useTypedSelector'

const HomePage: FC = () => {
	const items = useTypedSelector(state => state.todoApp.items)

	return <TodoApp items={items} />
}

export default HomePage
