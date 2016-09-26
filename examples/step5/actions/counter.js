export const actionTypes = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	CONCAT: 'CONCAT'
}

export const incActionCreator = (step) => {
	return {
		type: actionTypes.INCREMENT,
		step
	}
}

export const decActionCreator = (step) => {
	return {
		type: actionTypes.DECREMENT,
		step
	}
}

export const concatActionCreator = (value) => {
	return {
		type: actionTypes.CONCAT,
		value
	}
}
