import config from 'app/config'

export default (di) => {

  const componentAsyncSharedDeps = {
    containerFactory: '#containerFactory',
    componentFactory: '#componentFactory',
  }

  const componentCommon = {
    containerFactory: '#containerFactory',
    componentFactory: '#componentFactory',
    config: di.value(config),
  }

  return {

    '#di': {
      singleton: di
    },

    'app/view': {
      path: 'app/view',
      params: [{
        store: '#store',
        containerFactory: '#rootContainerFactory',
      }]
    },

    '#rootContainerFactory':{
      asyncResolve: false,
      shared: true,
      directory: {
        path: 'app/containers',
        params: [componentCommon],
        sharedAsync: [componentAsyncSharedDeps]
      },
    },
    '#containerFactory': {
      asyncResolve: true,
      shared: true,
      directory: {
        path: 'app/containers',
        params: [componentCommon],
      },
    },
    '#componentFactory': {
      asyncResolve: true,
      shared: true,
      directory: {
        path: 'app/components',
        params: [componentCommon],
      },
    },
    
    '#store': {
      path: 'app/store',
      shared: true,
      asyncResolve: true,
      params: [{
        persistConfig: di.value({
          whitelist: [
            'auth'
          ],
        }),
      }],
    },

  }
}
