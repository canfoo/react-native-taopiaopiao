/**
 * Created by canfoo on 2017/12/10.
 */
import React from 'react';
import HomePage from './pages/Home'
import CinemaPage from './pages/Cinema'
import MePage from './pages/Me'
import FilmDetail from './pages/FilmDetail'
import TabBar from './components/TabBar'

const homeIcons = [
  require('./assets/imgs/hno.png'),
  require('./assets/imgs/hok.png')
]
const cinemaIcons = [
  require('./assets/imgs/mno.png'),
  require('./assets/imgs/mok.png')
]
const meIcons = [
  require('./assets/imgs/eno.png'),
  require('./assets/imgs/eok.png')
]
const renderTabBar = (icons) => ({ tintColor, focused }) => {
  return (
    <TabBar
      icons={icons}
      tintColor={tintColor}
      focused={focused}
    />
  )
}


export const tabRoutes = {
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '电影',
      tabBarIcon: renderTabBar(homeIcons)
    },
  },
  Cinema: {
    screen: CinemaPage,
    navigationOptions: {
      tabBarLabel: '影院',
      tabBarIcon: renderTabBar(cinemaIcons)
    },
  },
  Me: {
    screen: MePage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: renderTabBar(meIcons)
    },
  }
}

export const stackRoutes = {
  FilmDetail: {
    screen: FilmDetail,
    path: 'filmDetail/:id',
    navigationOptions: {
      headerTitle: '影片详情'
    }
  }
}
