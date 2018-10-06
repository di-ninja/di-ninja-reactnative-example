import React from 'react'
import {
  Root,
} from "native-base"
import {
  createStackNavigator,
  createDrawerNavigator,
} from "react-navigation"

export default function({
  containerFactory: {
    SideBar,
    Home,
  }
}){

  const Drawer = createDrawerNavigator(
    {
      Home: { screen: Home },
    },
    {
      initialRouteName: "Home",
      contentOptions: {
        activeTintColor: "#e91e63"
      },
      contentComponent: props => <SideBar {...props} />
    }
  )

  const AppNavigator = createStackNavigator(
    {
      Drawer: { screen: Drawer },
      Home: { screen: Home },
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none"
    }
  )

  return () =>
    <Root>
      <AppNavigator />
    </Root>

}
