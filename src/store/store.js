import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux'

import {
  reducer as formReducer
} from 'redux-form'

import getStoredState from 'redux-persist/es/getStoredState'
import createPersistoid from 'redux-persist/es/createPersistoid'
import storage from 'redux-persist/es/storage'
import createTransform from 'redux-persist/es/createTransform'

export default async function ({
  persistConfig = {},
}){

  persistConfig = {
    key: 'root',
    version: 1,
    storage,
    transforms: [
      createTransform(
        (inboundState, key) => {
          return { ...inboundState };
        },
        (outboundState, key) => {
          return { ...outboundState, waiting: false };
        },
        {
          
        }
      )
    ],
    ...persistConfig
  }


  const reducer = combineReducers({
    form: formReducer,
    // log: (state = {}, action) => { console.log('reducer log', action); return state }
  })

  const initialState = await getStoredState(persistConfig)

  const persistoid = createPersistoid(persistConfig)

  const store = createStore(reducer, initialState)

  store.subscribe(() => {
    persistoid.update(store.getState())
  })

  return store
}
