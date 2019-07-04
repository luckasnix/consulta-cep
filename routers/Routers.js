import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';

const StackNavigator = createStackNavigator({
    home: {
        screen: Home
    }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;