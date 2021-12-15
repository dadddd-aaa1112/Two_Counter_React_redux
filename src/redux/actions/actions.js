import { ADD, DIV, SUB, MUL, ADD_NUMBER } from './actionTypes'

export function add() {
	return {
		type: ADD,
	}
}

export function sub() {
	return {
		type: SUB,
	}
}

export function mul() {
	return {
		type: MUL,
	}
}

export function div() {
	return {
		type: DIV,
	}
}

export function addNumber(number) {
	return {
		type: ADD_NUMBER,
		payload: number,
	}
}

export function asyncAdd(number) {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(addNumber(number))
		}, 3000)
	}
}
