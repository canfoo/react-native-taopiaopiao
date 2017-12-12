import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'

class Cinema extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Cinema
        </Text>
      </View>
    );
  }
}

export default Cinema

// export default StackNavigator({
//   Home: {
//     screen: Cinema,
//     navigationOptions: {
//       headerTitle: '影院'
//     }
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
