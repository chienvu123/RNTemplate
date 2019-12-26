import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';
import style from './style/index.style';

class DetailScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation, user} = this.props;
    return (
      <View style={style.container}>
        <Text>{user.name + user.text}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          <Text>Go to Home Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(DetailScreen);
