export const actionTypes = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	CONCAT: 'CONCAT'
}

export function incActionCreator(step) {
	return {
		type: actionTypes.INCREMENT,
		step
	}
}

export function decActionCreator(step) {
	return {
		type: actionTypes.DECREMENT,
		step
	}
}

export function concatActionCreator(value) {
	return {
		type: actionTypes.CONCAT,
		value
	}
}
