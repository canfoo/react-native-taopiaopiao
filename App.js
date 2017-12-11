/**
 * Created by canfoo on 2017/12/10.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import route from './src/route'
import { Provider } from 'mobx-react/native'
import stores from './src/store'
import Toast from 'react-native-easy-toast'
import Loading from './src/components/Loading';

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
    console.log('stores.loading.show', stores.loading.show)
    return (
      <View style={{flex: 1}}>
        <Provider {...stores}>
          <View style={{flex: 1}}>
            <AppNavigator></AppNavigator>
            <Toast ref="toast" defaultCloseDelay={500} position={'top'} />
            <Loading />
          </View>
        </Provider>
      </View>
    )
  }
}

export default App
