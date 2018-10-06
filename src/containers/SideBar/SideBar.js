import React, { Component } from 'react'
import { Image, ImageBackground, Platform } from 'react-native'
import { connect } from 'react-redux'
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Button,
  View,
  StyleProvider,
  getTheme,
  variables
} from 'native-base'

import { DrawerActions } from 'react-navigation'

import material from '../../../native-base-theme/variables/material'
import style from './SideBar.style'

import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'

const drawerCover = require('assets/drawer-cover.png')
const drawerImage = require('assets/logo-kitchen-sink.png')

export default function({

}){
  class SideBar extends Component {

    constructor(props) {
      super(props)
      this.state = {
        shadowOffsetWidth: 1,
        shadowRadius: 4,
      }
    }

    render() {
      return (
        <Container>
          <Content
            bounces={false}
            style={{
              flex: 1,
              backgroundColor: '#fff',
              top: -1,
            }}
          >
            <ImageBackground source={drawerCover} style={style.drawerCover}>
              <Image
                square
                style={style.drawerImage}
                source={drawerImage}
              />
            </ImageBackground>
            <List>
              <ListItem button noBorder onPress={() => { this.navigateTo('Home') }} >
                <Left>
                  <IconMCI
                    name='home'
                    style={style.menuIcon}
                    active
                  />
                  <Text style={style.text}>Accueil</Text>
                </Left>
              </ListItem>

            </List>

          </Content>
        </Container>
      )
    }


    closeDrawer(){
      this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    navigateTo(route) {
      const { navigation } = this.props

      navigation.navigate(route)

      const { state } = navigation
      const { routes, index } = state
      const currentRouteKey = routes[index].key
      if(route===currentRouteKey){
        this.closeDrawer()
      }

    }

  }

  return SideBar
}
