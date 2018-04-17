import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers/index";
import App from "./containers/app";

const store = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={store(reducers)}>
        <App />
    </Provider>,
    document.getElementById("root")
);
