import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from 'store/store'

import HomePage from './pages/Home/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<HomePage />
	</Provider>
)
