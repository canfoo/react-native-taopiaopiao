import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details', {id: 123})}
      title="Go to details"
    />
  </View>
);

const DetailsScreen = ({ navigation }) => {
  console.log('navigation', navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  )
};

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      // headerTitle: 'Home'
    },
  },
  Details: {
    screen: DetailsScreen,
    path: 'people/:id',
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;
