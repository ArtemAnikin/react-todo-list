import { createSlice } from '@reduxjs/toolkit'

import { ITodoData } from 'types/dataItem'

export interface IInitialState {
	items: ITodoData[]
}

const initialState: IInitialState = {
	items: []
}

export const todoAppSlice = createSlice({
	name: 'todoApp',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.items = [...state.items, action.payload]
		},
		deleteTodo: (state, action) => {
			state.items = state.items.filter(el => el.id !== action.payload.id)
		},
		completeTodo: (state, action) => {
			state.items = state.items.map(el => {
				if (el.id === action.payload.id) {
					el.complete = !el.complete
				}
				return el
			})
		},
		updateTodo: (state, action) => {
			state.items = state.items.map(el => {
				if (el.id === action.payload.id) {
					el.title = action.payload.title
				}
				return el
			})
		}
	}
})

export const { reducer } = todoAppSlice
export const { actions } = todoAppSlice
