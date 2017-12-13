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
import commonStyle from '../common/commonStyle'


@inject('filmDetail')
@observer
export default class FilmDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { filmDetail } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.topBg}>
          <Image
            source={require('../assets/imgs/mbg.png')}
            style={styles.mbg}
          />
          <View style={styles.topContent}>
            <View style={styles.leftCt}>
              <Image
                source={{uri: `https://gw.alicdn.com/${filmDetail.data.poster}_160x160Q75.jpg`}}
                style={styles.cover}
              />
            </View>
            <View style={styles.rightCt}>
              <Text style={styles.name} numberOfLines={1}>{filmDetail.data.showName}</Text>
              <Text style={styles.fontStyle} numberOfLines={1}>{filmDetail.data.showNameEn}</Text>
              <Text style={styles.fontStyle} numberOfLines={1}>{filmDetail.data.type}</Text>
              <Text style={styles.fontStyle} numberOfLines={1}>{`${filmDetail.data.country} | ${filmDetail.data.duration}`}</Text>
              <Text style={styles.fontStyle} numberOfLines={1}>{`${filmDetail.data.openTime}在中国上映`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailBody}>
          <Text style={styles.nomore}>暂时没有更多数据了～</Text>
        </View>
      </View>
    )
  }
}

const topBasicStyle = {
  width: gScreen.width,
  height: 200,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  topBg: {
    width: gScreen.width,
    height: 200,
    position: 'relative'
  },
  mbg: {
    ...topBasicStyle,
    zIndex: 100,
    backgroundColor: '#4281ad'
  },
  topContent: {
    ...topBasicStyle,
    zIndex: 101,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  leftCt: {
    width: 140,
    marginLeft: 20
  },
  rightCt: {
    width: gScreen.width - 180,
    height: 2000/1428 * 130,
    marginLeft: 5
  },
  cover: {
    width: 130,
    height: 2000/1428 * 130
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8
  },
  fontStyle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 12
  },
  detailBody: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100
  },
  nomore: {
    fontSize: 20,
    color: '#666'
  }
})
