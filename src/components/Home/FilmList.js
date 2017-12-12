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
import { observer, inject } from 'mobx-react/native'
import Button from 'react-native-button'
import commonStyle from '../../common/commonStyle'


export default class HelloWorl extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.hotList)
    return (
      <View>
        {
          this.props.hotList.map((filmContent, index) => {
            return (
              <View style={styles.container} key={index}>
                <View style={styles.wrapper}>
                  <View style={styles.cover}>
                    <Image
                      source={require('../../assets/imgs/default.png')}
                      style={styles.defaultImg}
                    />
                    <Image
                      source={{uri: 'https://gw.alicdn.com/i4/TB1onyyOXXXXXcrapXXXXXXXXXX_.jpg'}}
                      style={styles.filmImg}
                    />
                  </View>
                  <View style={styles.describtion}>
                    <View>
                      <Text style={styles.filmName}>你的名字</Text>
                    </View>
                    <View style={styles.starBox}>
                      <View style={styles.starContent}>
                        <View style={{width: 80, height: 15, position: 'absolute', top: 0, left: 0}}>
                          <Image
                            source={require('../../assets/imgs/nostar.png')}
                            style={styles.starImg}
                          />
                        </View>
                        <View style={{width: 70, height: 15, position: 'absolute', top: 0, left: 0, overflow: 'hidden'}}>
                          <Image
                            source={require('../../assets/imgs/star.png')}
                            style={styles.starImg}
                          />
                        </View>
                      </View>
                      <View>
                        <Text style={styles.starCount}>7.0</Text>
                      </View>
                    </View>
                    <View>
                      <Text numberOfLines={1} style={styles.desc1}>所有的相遇，都是久别重逢</Text>
                      <Text numberOfLines={1} style={styles.desc2}>上白石萌音,佟心竹,神木隆之介,皇贞季,长泽雅美,市原悦子</Text>
                    </View>
                  </View>
                  <View style={styles.btnBox}>
                    <Button
                       title="购买"
                       style={styles.buy}
                    >
                       购买
                    </Button>
                  </View>
                  <View style={styles.descbottom}>
                    <View style={styles.dbBox}>
                      <View style={styles.dbBv1}>
                        <Text numberOfLines={1} style={styles.dbFo1}>212</Text>
                      </View>
                      <View style={styles.dbBv2}>
                        <Text numberOfLines={1} style={styles.dbFo2}>jjjj</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        }
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
  filmName: {
    fontSize: 20,
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
