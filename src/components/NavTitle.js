/**
 * Created by canfoo on 2017/12/10.
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
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
    const { nav } = this.props
    return (
      <View style={styles.outBox}>
        <View style={styles.innerbox}>
          <View
            style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', backgroundColor: nav.hot ? _ACTIVECOLOR : _DEFAULTCOLOR}}
            onTouchStart={() => nav.switchNav(true)}>
            <Text style={{textAlign: 'center', color: !nav.hot ? _ACTIVECOLOR : _DEFAULTCOLOR}}>正在热映</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', backgroundColor: !nav.hot ? _ACTIVECOLOR : _DEFAULTCOLOR}}
            onTouchStart={() => nav.switchNav(false)}>
            <Text style={{textAlign: 'center', color: nav.hot ? _ACTIVECOLOR : _DEFAULTCOLOR}}>即将上映</Text>
          </View>
        </View>
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
    borderWidth: 1,
    borderColor: '#1aa7f7',
    borderRadius: 3
  }
})
