export const actionTypes = {
	INCREMENT: 'INCREMENT',
	ASYNCINCREMENT: 'ASYNCINCREMENT',
	DECREMENT: 'DECREMENT',
	ASYNCDECREMENT: 'ASYNCDECREMENT'
}

export function incActionCreator(step) {
	return {
		type: actionTypes.INCREMENT,
		step
	}
}

export function asyncIncActionCreator(step) {
	return function (dispatch) {
		setTimeout(() => {
			dispatch({type: actionTypes.ASYNCINCREMENT, step: step});
		}, 2000);
	}
}

export function decActionCreator(step) {
	return {
		type: actionTypes.DECREMENT,
		step
	}
}

export function asyncDecActionCreator(step) {
	return function (dispatch) {
		setTimeout(() => {
			dispatch({type: actionTypes.ASYNCDECREMENT, step: step});
		}, 2000);
	}
}

