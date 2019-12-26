import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import AppReducer from './reduxes/reducers';
import Navigator from 'navigators';

const store = createStore(AppReducer, applyMiddleware(thunk));

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
