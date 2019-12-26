import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from 'containers/Home';
import DetailScreen from 'containers/DetailScreen';

const HomeStack = createStackNavigator(
  {
    HomeScreen,
    DetailScreen,
  },
  {
    headerMode: 'none',
    mode: 'card',
  },
);

export default HomeStack;
