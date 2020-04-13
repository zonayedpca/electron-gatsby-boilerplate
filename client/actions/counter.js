import { INCREMENT, DECREMENT } from "./types";

export const incrementCounter = () => {
	return {
		type: INCREMENT,
	};
};

export const decrementCounter = () => {
	return {
		type: DECREMENT,
	};
};
