import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import combineReducers from './redux/rootReducers'
import reduxThunk from 'redux-thunk'

// function loggerMiddleware(store) {
// 	return function (next) {
// 		return function (action) {
// 			const result = next(action)
// 			console.log('Middleware', store.getState())
// 			return result
// 		}
// 	}
// }

const loggerMiddleware = (store) => (next) => (action) => {
	const result = next(action)
	return result
}

const store = createStore(
	combineReducers,
	applyMiddleware(loggerMiddleware, reduxThunk)
)

const app = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
