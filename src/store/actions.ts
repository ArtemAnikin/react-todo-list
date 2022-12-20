import { ITodoData } from 'types/dataItem'

export enum Actions {
	ADD_TODO,
	UPDATE_TODO,
	REMOVE_TODO,
	COMPLETE_TODO
}

export interface IAction {
	type: Actions
	payload: ITodoData
}

export const addTodo = (item: ITodoData): IAction => {
	return { type: Actions.ADD_TODO, payload: item }
}

export const updateTodo = (item: ITodoData): IAction => {
	return { type: Actions.UPDATE_TODO, payload: item }
}

export const removeTodo = (item: ITodoData): IAction => {
	return { type: Actions.REMOVE_TODO, payload: item }
}

export const completeTodo = (item: ITodoData): IAction => {
	return { type: Actions.COMPLETE_TODO, payload: item }
}
