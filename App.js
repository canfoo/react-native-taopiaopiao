/**
 * Created by canfoo on 2017/12/10.
 */
import './src/common/globalContants'
import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation'
import {
  tabRoutes,
  stackRoutes
} from './src/routes'
import { Provider } from 'mobx-react/native'
import stores from './src/store'
import Toast from 'react-native-easy-toast'
import Loading from './src/components/Loading'
import NavTitle from './src/components/NavTitle'
import Player from './src/components/Player'

const AppNavigator = TabNavigator(tabRoutes, {
  tabBarOptions: {
    activeTintColor: '#ff4d64',
    labelStyle: {
      fontSize: 13,
      marginBottom: 5
    },
    style: {
      backgroundColor: '#fff',
      height: 56
    }
  }
})

const navigationOptions = ({ navigation }) => {
  return {
    headerTitle: (
      <NavTitle navigation={navigation} />
    ),
    headerMode: 'none'
  }
}

const AppStackNavigator = StackNavigator({
  Home: {
    screen: AppNavigator,
    navigationOptions
  },
  ...stackRoutes
}, {
  initialRouteName: 'Home'
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  componentDidMount () {
    stores.toast.getToastRef(this.refs.toast)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Provider {...stores}>
          <View style={{flex: 1}}>
            <AppStackNavigator />
            <Toast ref="toast" defaultCloseDelay={500} position={'top'} />
            <Loading />
          </View>
        </Provider>
      </View>
    )
  }
}

export default App
