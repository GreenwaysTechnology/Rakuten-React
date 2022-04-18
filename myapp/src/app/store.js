import { createStore, combineReducers } from 'redux'
import { counterReducer } from '../counter/counterreducer'


const rootReducer = combineReducers({
    counter: counterReducer
})

const appStore = createStore(rootReducer)

export { appStore };