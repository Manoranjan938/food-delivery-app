import rootReducer from 'apis/Reducers'
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes("Chrome")) {

    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

} else {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware))
    );
}

export default store;