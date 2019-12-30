import React, {PureComponent} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Navigator from 'navigators';
import style from './style/index.style';

class RootContainer extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    global.root = {...this};
  }

  render() {
    return (
      <SafeAreaView style={style.areaContainer}>
        <Navigator />
      </SafeAreaView>
    );
  }
}

export default connect()(RootContainer);
