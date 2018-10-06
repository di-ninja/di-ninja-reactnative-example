import React, { Component } from 'react'

import { Provider } from 'react-redux'


import SplashScreenContainer from './SplashScreenContainer'

export default class RootContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      ready: false,
    }
  }
  componentDidMount(){
    Promise.all([
      this.props.containerFactory.then(({ App })=>{
        this.App = App
      }),
      this.props.storePromise.then((store)=>{
        this.store = store
      }),
    ]).then(()=>{
      this.setState({ ready: true })
    })
  }
  render(){
    if(this.state.ready){
      const {
        App,
        store,
      } = this
      return (
        <Provider store={store}>
          <App />
        </Provider>
      )
    }
    else{
      return (
        <SplashScreenContainer />
      )
    }
  }
}
