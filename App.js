import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routers from './routers/Routers';
import reducer from './reducers/rootReducer';

const store = createStore(reducer);

store.subscribe(
    () => {
        console.log(store.getState());
    }
);

function App() {
    return (
        <Provider store={store}>
            <Routers/>
        </Provider>
    );
}

export default App;