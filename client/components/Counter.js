import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementCounter, decrementCounter } from "../actions";

import "./counter.css";

const Counter = () => {
	const counter = useSelector(({ counter }) => counter);
	const dispatch = useDispatch();
	return (
		<div className="counter-container">
			<button onClick={() => dispatch(incrementCounter())}>➖</button>
			<h4>{counter.count}</h4>
			<button onClick={() => dispatch(decrementCounter())}>➕</button>
		</div>
	);
};

export default Counter;
