/**
 * Created by canfoo on 2017/12/10.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import NavTitle from '../components/NavTitle';
import { observer, inject } from 'mobx-react/native'

@inject('apis')
@observer
class HotList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { apis } = this.props
    apis.fetchSwiperList()
  }

  render() {
    console.log('this.props.apis.swiperList', this.props.apis.swiperList.slice())
    return (
      <View>
        <Text>
          Welcome HotList
        </Text>
      </View>
    );
  }
}

const navigationOptions = ({ navigation }) => {
  return {
    headerTitle: (
      <NavTitle navigation={navigation} />
    ),
    headerMode: 'none'
  }
}

export default StackNavigator({
  Home: {
    screen: HotList,
    navigationOptions
  }
})

const styles = StyleSheet.create({
});
