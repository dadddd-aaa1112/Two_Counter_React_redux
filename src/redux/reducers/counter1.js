import { ADD, SUB, ADD_NUMBER } from '../../redux/actions/actionTypes'

const initialState = {
	counter22: 0,
}

export default function counter1(state = initialState, action) {
	switch (action.type) {
		case ADD:
			return {
				counter22: state.counter22 + 1,
			}
		case SUB:
			return {
				counter22: state.counter22 - 1,
			}

		case ADD_NUMBER:
			return {
				counter22: state.counter22 + action.payload,
			}
		default:
			return state
	}
}
