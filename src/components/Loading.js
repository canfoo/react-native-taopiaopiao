/**
 * Created by canfoo on 2017/12/10.
 */
import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { observer, inject } from 'mobx-react/native'

@inject('loading')
@observer
export default class Loading extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<Spinner visible={this.props.loading.show} />)
  }
}
