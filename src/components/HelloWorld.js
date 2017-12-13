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


export default class HelloWorld extends Component {
  render() {
    return (
      <Text>hello world</Text>
    )
  }
}

const styles = StyleSheet.create({
})
