import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Detail from '../screens/Detail'

const StackNavigator = createStackNavigator({
    home: {
        screen: Home
    },
    detail: {
        screen: Detail
    }
})

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer