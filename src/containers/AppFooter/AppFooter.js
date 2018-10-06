import React, { Component } from 'react'

import { Footer, Text } from 'native-base'

import style from './AppFooter.style'

export default function(){

  class AppFooter extends Component{
    render() {
      return (
        <Footer style={style.footer}>
          <Text style={style.text}>{'di-ninja - the dependency injection framework'.toUpperCase()}</Text>
        </Footer>
      )
    }
  }

  return AppFooter
}
