import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import style from './style/index.style';
import actions from 'reduxes/actions';
import apis from 'apis';

class HomeScreen extends PureComponent<> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeUserInfo = async () => {
    if (this.userName) {
      this.props.setUser({name: this.userName});
      this.props.navigation.navigate('DetailScreen');
    } else {
      Alert.alert('Warning', 'you must fill name');
    }
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={style.container}>
        <TouchableOpacity onPress={this.changeUserInfo}>
          <Text style={{color: 'blue'}}>Go to Detail Screen</Text>
        </TouchableOpacity>
        <TextInput
          style={{width: '90%', height: 36}}
          underlineColorAndroid="transparent"
          onChangeText={text => {
            this.userName = text;
          }}
          placeholder="username"
        />
      </View>
    );
  }
}

export default connect(null, {
  setUser: actions.user.setUser,
})(HomeScreen);
