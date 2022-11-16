import { Text, TouchableOpacity } from "react-native";

import Styles from './styles'

function Button ({text, style, smart = false, reverse = false, onPress}) {
  const stylesDefault = Styles(smart, reverse)

  return (
    <TouchableOpacity style={[stylesDefault.button, style]}>
      <Text style={[stylesDefault.text, style]}>{text}</Text>
    </TouchableOpacity> 
  )
}

export default Button