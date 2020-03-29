import React from 'react';
import ApolloClient from 'apollo-boost';
import List from './components/List';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import DataLoader from './components/DataLoader';

const client = new ApolloClient({
  uri: 'http://ohthatbridge.com/graphql'
});

const reduxStore = createStore(store, applyMiddleware(thunkMiddleware.withExtraArgument({ client })))

function App() {
  return (
    <Provider store={reduxStore}>
      <DataLoader>
        <List />
      </DataLoader>
    </Provider>
  );
}

export default App;
