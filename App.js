/**
 * Created by canfoo on 2017/12/10.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import route from './src/route'
import { Provider } from 'mobx-react/native'
import stores from './src/store'

const AppNavigator = TabNavigator(route, {
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

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Provider {...stores}>
          <AppNavigator></AppNavigator>
        </Provider>
      </View>
    )
  }
}

export default App
