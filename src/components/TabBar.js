/**
 * Created by canfoo on 2017/12/10.
 */
import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

export default (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={props.focused ? props.icons[1] : props.icons[0]}
        style={styles.icon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
    marginBottom: 3
  }
})
