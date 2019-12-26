import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import AppReducer from './reduxes/reducers';
import Navigator from 'navigators';

const store = createStore(AppReducer, applyMiddleware(thunk));

const style = {
  areaContainer: {flex: 1},
};

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={style.areaContainer}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
