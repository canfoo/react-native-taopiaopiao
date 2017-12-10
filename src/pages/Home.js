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

class Home extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome Home
        </Text>
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: NavTitle
    }
  }
})

const styles = StyleSheet.create({
});
