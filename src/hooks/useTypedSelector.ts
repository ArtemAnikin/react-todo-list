import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { typeRootStore } from 'store/store'

export const useTypedSelector: TypedUseSelectorHook<typeRootStore> = useSelector
