export const actionTypes = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT'
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
