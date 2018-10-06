import React from 'react'
import { AppRegistry } from 'react-native'

import RootContainer from './RootContainer'

export default ({
  containerFactory,
  store,
})=>{

  AppRegistry.registerComponent("diNinjaReactnativeExample", () => () => {
    return (
      <RootContainer
        containerFactory={containerFactory}
        storePromise={store}
      />
    )
  })

}
