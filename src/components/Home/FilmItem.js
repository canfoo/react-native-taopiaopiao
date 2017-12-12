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
import Button from 'react-native-button'
import commonStyle from '../../common/commonStyle'


export default class FilmItem extends Component {
  constructor(props) {
    super(props)
  }

  _renderBottomActivity () {
    if (this.props.hot) {
      return (
        <View style={styles.descbottom}>
          <View style={styles.dbBox}>
            <View style={styles.dbBv1}>
              <Text numberOfLines={1} style={styles.dbFo1}>1212五折狂欢</Text>
            </View>
            <View style={styles.dbBv2}>
              <Text numberOfLines={1} style={styles.dbFo2}>1212特惠抢票，名额有限抢完即止</Text>
            </View>
          </View>
        </View>
      )
    }
    else {
      return null
    }
  }

  buyStyle(color) {
    return {
      borderWidth: 2 * gScreen.onePix,
      borderStyle: 'solid',
      borderColor: color,
      color: color,
      width: 60,
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 3
    }
  }

  render() {
    const containerStyle = {
      flex: 1,
      position: 'relative',
      paddingLeft: 10,
      paddingTop: 7,
      paddingBottom: 7,
      height: 180,
      backgroundColor: '#fff'
    }
    return (
      <View style={{...containerStyle, height: this.props.hot ? 180 : 150}}>
        <View style={styles.wrapper}>
          <View style={styles.cover}>
            <Image
              source={require('../../assets/imgs/default.png')}
              style={styles.defaultImg}
            />
            <Image
              source={{uri: `https://gw.alicdn.com/${this.props.filmItem.poster}`}}
              style={styles.filmImg}
            />
            <Image
              source={require('../../assets/imgs/play.png')}
              style={styles.playImg}
            />
          </View>
          <View style={styles.describtion}>
            <View>
              <Text style={styles.filmName}>{this.props.filmItem.showName}</Text>
            </View>
            <View style={styles.starBox}>
              <View style={styles.starContent}>
                <View style={{width: 80, height: 15, position: 'absolute', top: 0, left: 0}}>
                  <Image
                    source={require('../../assets/imgs/nostar-s.png')}
                    style={styles.starImg}
                  />
                </View>
                <View style={{width: 80 * (this.props.filmItem.remark / 10), height: 15, position: 'absolute', top: 0, left: 0, overflow: 'hidden'}}>
                  <Image
                    source={require('../../assets/imgs/star-s.png')}
                    style={styles.starImg}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.starCount}>{this.props.filmItem.remark}</Text>
              </View>
            </View>
            <View>
              <Text numberOfLines={1} style={styles.desc1}>{this.props.filmItem.highlight}</Text>
              <Text numberOfLines={1} style={styles.desc2}>{this.props.filmItem.leadingRole}</Text>
            </View>
          </View>
          <View style={styles.btnBox}>
            <Button
               style={this.props.hot ? this.buyStyle('#ff4d64') : this.buyStyle('#37b7ff')}
            >
               {this.props ? '购买' : '预售'}
            </Button>
          </View>
          {
            this._renderBottomActivity()
          }
        </View>
      </View>
    )
  }
}

const imgBasicStyle = {
  width: 90,
  height: 2000/1428 * 90,
  position: 'absolute',
  top: 0,
  left: 0,
}

const starBasicStyle = {
  height: 50,
  resizeMode: Image.resizeMode.contain,
  position: 'absolute',
  top: 0,
  left: 0,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingLeft: 10,
    paddingTop: 7,
    paddingBottom: 7,
    height: 180,
    backgroundColor: '#fff'
  },
  wrapper: {
    ...commonStyle.borderBottom,
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 5
  },
  cover: {
    width: 100,
    position: 'relative'
  },
  describtion: {
    width: gScreen.width - 190
  },
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 80,
    paddingTop: 38
  },
  defaultImg: {
    ...imgBasicStyle,
    zIndex: 1
  },
  filmImg: {
    ...imgBasicStyle,
    zIndex: 2
  },
  playImg: {
    position: 'absolute',
    left: 30,
    top: (2000/1428 * 90)/2 - 15,
    width: 30,
    height: 30,
    zIndex: 3
  },
  filmName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 7
  },
  starBox: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 12
  },
  starContent: {
    position: 'relative',
    width: 80
  },
  starImg: {
    width: 80,
    height: 15
  },
  starCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6
  },
  desc1: {
    fontSize: 16,
    color: '#9c9c9c',
    marginTop: 20
  },
  desc2: {
    fontSize: 16,
    color: '#9c9c9c',
    marginTop: 8
  },
  buy: {
    borderWidth: 2 * gScreen.onePix,
    borderStyle: 'solid',
    borderColor: '#ff4d64',
    color: '#ff4d64',
    width: 60,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3
  },
  descbottom: {
    marginTop: 10,
    paddingLeft: 100,
    flex: 1
  },
  dbBox: {
    ...commonStyle.borderTop,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 6
  },
  dbBv1: {
    ...commonStyle.borderRight,
    flex: 1
  },
  dbBv2: {
    flex: 1,
    paddingLeft: 10,
  },
  dbFo1: {
    color: '#fea54c',
    fontSize: 16,
  },
  dbFo2: {
    color: '#888',
    fontSize: 16
  }
})
