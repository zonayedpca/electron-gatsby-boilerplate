import React from "react";
import { Provider as ProviderFromReactRedux } from "react-redux";

import createStore from "./";

const Provider = ({ element }) => {
	const store = createStore();
	return (
		<ProviderFromReactRedux store={store}>{element}</ProviderFromReactRedux>
	);
};

export default Provider;
