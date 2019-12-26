import React from 'react';
import {connect} from 'react-redux';
import RootNavigator from './rootNavigator';

class AppWithNavigationState extends React.PureComponent {
  render() {
    return <RootNavigator />;
  }
}

export default AppWithNavigationState;
