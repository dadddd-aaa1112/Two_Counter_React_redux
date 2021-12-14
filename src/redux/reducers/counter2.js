const initialState = {
	counter2: 2,
}

export default function counter2(state = initialState, action) {
	switch (action.type) {
		case 'MUL':
			return {
				counter2: state.counter2 * 2,
			}
		case 'DIV':
			return {
				counter2: state.counter2 / 2,
			}
		default:
			return state
	}
}
