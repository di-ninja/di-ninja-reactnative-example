import React, { Component } from "react"
import { StyleProvider } from "native-base"

import getTheme from "app/theme/components"
import variables from "app/theme/variables/commonColor"

export default function({
  containerFactory: {
    Router,
  }
}){
  return class Setup extends Component {
    render() {
      return (
        <StyleProvider style={getTheme(variables)}>
          <Router />
        </StyleProvider>
      )
    }
  }
}
