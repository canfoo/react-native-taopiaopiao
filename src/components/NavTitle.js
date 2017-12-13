/**
 * Created by canfoo on 2017/12/10.
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { observer, inject } from 'mobx-react/native'

const _ACTIVECOLOR = '#37b7ff'
const _DEFAULTCOLOR = '#fff'

@inject('nav')
@observer
export default class NavTitle extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { nav, navigation } = this.props
    let Ele = null
    switch (navigation.state.index) {
      case 0:
        Ele = (
          <View style={styles.outBox}>
            <View style={styles.innerbox}>
              <TouchableOpacity
                style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', backgroundColor: nav.hot ? _ACTIVECOLOR : _DEFAULTCOLOR}}
                activeOpacity={0.8}
                onPress={() => nav.switchNav(true)}>
                <Text style={{textAlign: 'center', color: !nav.hot ? _ACTIVECOLOR : _DEFAULTCOLOR}}>正在热映</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', backgroundColor: !nav.hot ? _ACTIVECOLOR : _DEFAULTCOLOR}}
                activeOpacity={0.8}
                onPress={() => nav.switchNav(false)}>
                <Text style={{textAlign: 'center', color: nav.hot ? _ACTIVECOLOR : _DEFAULTCOLOR}}>即将上映</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
        break;
      case 1:
        Ele = (
          <Text>影院</Text>
        )
        break;
      case 2:
        Ele = (
          <Text>我的</Text>
        )
        break;
      case 3:
        Ele = (
          <Text>影片</Text>
        )
        break;
      default:
        Ele = null
    }
    return (
      <View>
        { Ele }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outBox: {
    flex: 1,
    width: 180,
    paddingTop: 7,
    paddingBottom: 7
  },
  innerbox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderStyle: 'solid',
    borderWidth: 2 * gScreen.onePix,
    borderColor: '#1aa7f7',
    borderRadius: 5 * gScreen.onePix
  }
})
