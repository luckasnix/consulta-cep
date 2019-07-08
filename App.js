import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routers from './routers/Routers';
import reducer from './reducers/rootReducer';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

function App() {
    return (
        <Provider store={store}>
            <Routers/>
        </Provider>
    );
}

export default App;