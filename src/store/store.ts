import { createStore } from 'redux'

import { reducer as todoReducer } from 'store/reducer'

// @ts-ignore
export const store = createStore(todoReducer)
