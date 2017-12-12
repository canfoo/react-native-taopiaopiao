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
import { StackNavigator } from 'react-navigation'
import { observer, inject } from 'mobx-react/native'
import NavTitle from '../components/NavTitle'
import SwiperView from '../components/SwiperView'
import FilmItem from '../components/Home/FilmItem'
import Player from '../components/Player'

@inject('apis')
@inject('nav')
@observer
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0
    }
  }

  componentWillMount() {
    const { apis } = this.props
    apis.fetchSwiperList()
    apis.fetchHotFilmList({city: 'bj'})
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.nav.hot', nextProps.nav.hot)
  }

  _renderFilmList(lists) {
    return (
      <View>
        {
          lists.map((item, index) => {
            return (
              <FilmItem filmItem={item} hot={this.props.nav.hot} key={item.id} />
            )
          })
        }
      </View>
    )
  }

  render() {
    if (!this.props.nav.hot && !this.props.apis.comingFilmList.slice().length) {
      const { apis } = this.props
      apis.fetchComingFilmList({limit: 20, offset: this.state.offset})
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.swiperBox}>
            <SwiperView uriList={this.props.apis.swiperList.slice()} />
          </View>
          <View style={styles.filmList}>
            {
              this.props.nav.hot ? this._renderFilmList(this.props.apis.hotFilmList.slice()) : this._renderFilmList(this.props.apis.comingFilmList.slice())
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const navigationOptions = ({ navigation }) => {
  return {
    headerTitle: (
      <NavTitle navigation={navigation} />
    ),
    headerMode: 'none'
  }
}

export default Home

// export default StackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  swiperBox: {
    height: (520/1280 * gScreen.width + 10)
  },
  filmList: {
    marginTop: -10,
    marginBottom: 15
  }
});
