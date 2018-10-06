import React from 'react'

// import Entypo from 'react-native-vector-icons/Entypo'
// import EvilIcons from 'react-native-vector-icons/EvilIcons'
// import Feather from 'react-native-vector-icons/Feather'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import Foundation from 'react-native-vector-icons/Foundation'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import Octicons from 'react-native-vector-icons/Octicons'
// import Zocial from 'react-native-vector-icons/Zocial'
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const icons = {
  // Entypo,
  // EvilIcons,
  // Feather,
  // FontAwesome,
  // FontAwesome5,
  // Foundation,
  // Ionicons,
  // MaterialIcons,
  MaterialCommunityIcons,
  // Octicons,
  // Zocial,
  // SimpleLineIcons,

  // fa: FontAwesome5,
  mci: MaterialCommunityIcons,
}

export default function(){
  return function Icon({ type, ...props }){
    const IconComponent = icons[type]
    return <IconComponent {...props} />
  }
}
