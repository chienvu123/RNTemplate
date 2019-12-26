import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from 'containers/Auth/login';
import RegisterScreen from 'containers/Auth/register';

const AuthStack = createStackNavigator(
  {
    LoginScreen,
    RegisterScreen,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export default AuthStack;
