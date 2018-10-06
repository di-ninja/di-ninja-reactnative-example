import React, {
  Component,
} from 'react'

import { Image } from 'react-native'

import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Title,
  Text,
} from 'native-base'

import { DrawerActions } from 'react-navigation'

import autobind from 'autobind-decorator'

import style from './AppHeader.style'

export default function({
  componentFactory: {
    Icon
  },
  containerFactory: {

  },
}){

  class AppHeader extends Component{
    constructor(props){
      super(props)
    }

    @autobind
    openDrawer(){
      this.props.navigation.dispatch(DrawerActions.openDrawer())
    }

    render(){
      return (
        <Header style={style.header}>
          <Left>
            <Button transparent onPress={this.openDrawer}>
              <Icon type="mci" name="menu" />
            </Button>
          </Left>

          <Body>
            <Title style={style.title}>
              <Text>
                Di Ninja Example
              </Text>
            </Title>
          </Body>

          <Right>
            <Image source={style.Logo} />
          </Right>

        </Header>
      )
    }
  }

  return AppHeader
}
