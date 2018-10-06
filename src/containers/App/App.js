import React, { Component } from 'react'

export default function({
  containerFactory: {
    Setup,
  }
}){

  return class App extends Component {
    render() {
      return <Setup />
    }
  }

}
