/**
 * Created by canfoo on 2017/12/10.
 */
import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper'

export default (props) => {
  return (
    <Swiper autoplay={true} loop={true} >
      {
        props.uriList.map((uri, index) => (
          <View key={index}>
            <Image
              source={{uri: `${uri}_720x720Q30.jpg`}}
              style={styles.img}
            />
          </View>
        ))
      }
    </Swiper>
  )
}

const styles = StyleSheet.create({
  img: {
    width: gScreen.width,
    height: (520/1280 * gScreen.width)
  }
});
