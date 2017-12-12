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
import { StackNavigator } from 'react-navigation';
import { observer, inject } from 'mobx-react/native'
import NavTitle from '../components/NavTitle';
import SwiperView from '../components/SwiperView'
import FilmList from '../components/Home/FilmList'

@inject('apis')
@observer
class HotList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { apis } = this.props
    apis.fetchSwiperList()
    apis.fetchHotFilmList({limit: 20, offset: 0})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.swiperBox}>
          <SwiperView uriList={this.props.apis.swiperList.slice()} />
        </View>
        <View>
          <ScrollView>
            <FilmList hotList={this.props.apis.hotFilmList.slice()}/>
          </ScrollView>
        </View>
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

export default StackNavigator({
  Home: {
    screen: HotList,
    navigationOptions
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  swiperBox: {
    height: (520/1280 * gScreen.width + 10)
  }
});
