import Promise from 'bluebird'
import produce from 'immer'

import { Component } from 'react'

Object.assign(Component.prototype, {
  setStateAsync: Promise.promisify(Component.prototype.setState),
  updateState(callback){
    return this.setState(state => produce(state, callback))
  },
  updateStateAsync(callback){
    return this.setStateAsync(state => produce(state, callback))
  },
})

navigator.geolocation.getCurrentPositionAsync = (options)=>{
  return new Promise((resolve, reject)=>{

    function rejectHandler(e){
      const { code, message } = e
      const error = new Error(message)
      error.code = code
      return reject(error)
    }

    navigator.geolocation.getCurrentPosition(resolve, rejectHandler, options)
  })
}
