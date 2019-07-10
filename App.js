import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import Routers from './routers/Routers';
import reducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

function App() {
    return (
        <Provider store={store}>
            <Routers/>
        </Provider>
    );
}

export default App;