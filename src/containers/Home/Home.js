import React, {
  PropTypes,
  Component,
} from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

//Components
import {
  Container,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  connectStyle,
} from 'native-base'

import autobind from 'autobind-decorator'

import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'

import style from './Home.style'

export default function({
  componentFactory: {
    Icon,
  },
  containerFactory: {
    AppHeader,
    AppFooter,
  },
}){

  class Home extends Component {

    constructor(props) {
      super(props)

    }

    render() {

      const {
        navigation,
      } = this.props

      return (
        <Container>

          <AppHeader navigation={navigation} />

          <Content>


            <View style={style.container}>
              <View>
                <View>
                  <Icon type="mci" name="ninja" />
                  <Text>Di-Ninja</Text>
                </View>
                <View>
                  <Text>implémentation example with</Text>
                </View>
                <View>
                  <Icon type="mci" name="react" />
                  <Text>React-Native</Text>
                </View>
              </View>

            </View>

          </Content>

          <AppFooter />

        </Container>
      )
    }
  }


  return Home

}
