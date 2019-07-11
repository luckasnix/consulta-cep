import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Navigator from './navigation/Navigator';
import reducer from './store/reducers/rootReducer';

const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
}

export default App;