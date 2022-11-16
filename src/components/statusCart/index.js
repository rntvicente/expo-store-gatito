import { View, Text } from 'react-native'

import Button from '../button'
import CurrencyFormat from '../../utils/currency-format'

import Styles from './styles'

function StatusCart ({ total }) {
  return (
    <View style={Styles.content}>

      <View style={Styles.contatiner}>
        <Text style={Styles.description}>Total Carrinnho:</Text>
        <Text style={Styles.total}>{CurrencyFormat(total)}</Text>
      </View>

      <View style={Styles.button}>
        <Button reverse text="Fechar Pedido" />
      </View>
    </View>
  )
}

export default StatusCart