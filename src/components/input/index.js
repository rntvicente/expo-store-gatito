import { TextInput } from "react-native";

import Styles from './styles'

const convertString = (value) => String(value);
const validateNumber = (value) => value.match(/^[0-9]*$/);
const removeLeftZero = (value) => value.replace(/^(0)(.+)/, '$2');

const dispatchUpdate = (value, cb) => {
  const isInteger = validateNumber(value)

  if (!isInteger) {
    return;
  }

  const validatedNumber = removeLeftZero(value)

  cb(validatedNumber)
}

function Input ({ value, style, onChanceText }) {
  return (
    <TextInput
      style={[Styles.field, style]}
      value={convertString(value)}
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(value) => dispatchUpdate(value, onChanceText)}
    />    
  );
}

export default Input