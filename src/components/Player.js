/**
 * Created by canfoo on 2017/12/10.
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {
  observer,
  inject
} from 'mobx-react/native'
import Video from 'react-native-video'

export default class HelloWorl extends Component {
  render() {
    return (
        <View>
          <Video
            source={{uri: 'http://vodcdn.video.taobao.com/oss/taobao-ugc/fb4821e7e9af423b95c52811f4c3a966/1480556533/video.mp4'}}
            ref={(ref) => {
              this.player = ref
            }}
            rate={1.0}
            volume={1.0}
            muted={false}
            paused={false}
            resizeMode="cover"
            repeat={true}
            playInBackground={false}
            playWhenInactive={false}
            ignoreSilentSwitch={'ignore'}
            progressUpdateInterval={250.0}
            style={styles.backgroundVideo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})
