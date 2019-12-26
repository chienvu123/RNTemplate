import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../style/login.style';

export default class LoginScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HomeStack');
          }}>
          <Text>Go to Home Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text>Go to Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
