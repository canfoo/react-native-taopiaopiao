/**
 * Created by canfoo on 2017/12/10.
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import {
  observer,
  inject
} from 'mobx-react/native'
import Video from 'react-native-video'
import commonStyle from '../common/commonStyle'

@inject('player')
@observer
export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paused: true,
      showCover: true
    }
  }

  _playVideo(e) {
    e.stopPropagation()  // 阻止事件冒泡，即无法触发父亲的绑定的_closeVideo事件
    this.setState({
      paused: !this.state.paused,
      showCover: false
    })
  }

  _closeVideo(e) {
    const { player } = this.props
    this.setState({
      paused: true,
      showCover: true
    })
    player.closeVideo()
  }

  render() {
    const { player } = this.props
    let Ele = null
    if (player.show && player.uri) {
      Ele = (
        <View style={styles.wrap} onTouchStart={(e) => this._playVideo(e)}>
          {
            (() => {
              if (this.state.showCover) {
                return (
                  <Image
                    source={{uri: player.cover}}
                    style={styles.cover}
                  />
                )
              }
              return null
            })()
          }
          {
            (() => !this.state.paused ? null : (
              <Image
                source={require('../assets/imgs/play-b.png')}
                style={styles.playb}
              />
            ))()
          }
          <View style={styles.videoBox}>
            <Video
              source={{uri: player.uri}}
              ref={(ref) => {
                this.player = ref
              }}
              rate={1.0}
              volume={1.0}
              muted={false}
              paused={this.state.paused}
              resizeMode="cover"
              repeat={true}
              playInBackground={false}
              playWhenInactive={false}
              ignoreSilentSwitch={'ignore'}
              progressUpdateInterval={250.0}
              style={styles.backgroundVideo}
            />
          </View>
        </View>
      )
    }
    return (
      <View style={player.show ? styles.container : {}} onTouchStart={(e) => {this._closeVideo(e)}}>
        { Ele }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100
  },
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    marginTop: 100
  },
  videoBox: {
    backgroundColor: '#000',
    paddingTop: 20,
    paddingBottom: 20,
  },
  backgroundVideo: {
    flex: 1,
    width: gScreen.width - 30
  },
  cover: {
    flex: 1,
    width: 200/280 * 240,
    height: 240,
    position: 'absolute',
    zIndex: 201
  },
  playb: {
    flex: 1,
    width: 80,
    height: 80,
    position: 'absolute',
    zIndex: 202
  }
})
