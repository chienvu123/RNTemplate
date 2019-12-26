import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from 'containers/Home';
import NewsDetail from 'containers/Home/newsDetail';

const HomeStack = createStackNavigator(
  {
    HomeScreen,
    NewsDetail,
  },
  {
    headerMode: 'none',
    mode: 'card',
  },
);

export default HomeStack;
