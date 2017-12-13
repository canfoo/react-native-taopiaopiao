/**
 * Created by canfoo on 2017/12/10.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  observer,
  inject
} from 'mobx-react/native'
import { StackNavigator } from 'react-navigation'
import NavTitle from '../components/NavTitle'
import SwiperView from '../components/SwiperView'
import FilmItem from '../components/Home/FilmItem'
import Player from '../components/Player'

@inject('apis')
@inject('nav')
@observer
export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { apis } = this.props
    apis.fetchSwiperList()
    apis.fetchHotFilmList({city: 'bj'})
  }

  _renderFilmList(lists) {
    return (
      <View>
        {
          lists.map((item, index) => {
            return (
              <FilmItem filmItem={item} hot={this.props.nav.hot} navigation={this.props.navigation} key={item.id} />
            )
          })
        }
      </View>
    )
  }

  _renderSwiperView() {
    if (this.props.nav.hot) {
      return (
        <View style={styles.swiperBox}>
          <SwiperView uriList={this.props.apis.swiperList.slice()} />
        </View>

      )
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Player />
        <ScrollView style={styles.scrollViewStyle}>
          {
            this._renderSwiperView()
          }
          <View style={{marginBottom: 15, marginTop: this.props.nav.hot ? -10 : 0}}>
            {
              this.props.nav.hot ? this._renderFilmList(this.props.apis.hotFilmList.slice()) : this._renderFilmList(this.props.apis.comingFilmList.slice())
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  scrollViewStyle: {
    position: 'relative'
  },
  swiperBox: {
    height: (520/1280 * gScreen.width + 10)
  },
  filmList: {
    marginTop: 0,
    marginBottom: 15
  }
});
