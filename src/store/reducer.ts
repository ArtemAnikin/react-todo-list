import { ITodoData } from 'types/dataItem'

import { Actions, IAction } from 'store/actions'

const initialState: ITodoData[] = []

export const reducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case Actions.ADD_TODO:
			return [...state, action.payload]
		case Actions.UPDATE_TODO:
			return state.map(el => {
				if (el.id === action.payload.id) {
					el.title = action.payload.title
				}
				return el
			})
		case Actions.REMOVE_TODO:
			return state.filter(el => el.id !== action.payload.id)
		case Actions.COMPLETE_TODO:
			return state.map(el => {
				if (el.id === action.payload.id) {
					el.complete = !el.complete
				}
				return el
			})
		default:
			return state
	}
}
