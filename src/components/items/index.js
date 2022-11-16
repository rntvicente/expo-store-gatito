import { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import InputNumber from '../input'
import Button from '../button'
import CurrencyFormat from '../../utils/currency-format'

import Styles from "./styles"

const INITIAL_QUANTITY = 1;

function Items ({ name, price, description }) {
  const [quantity, setQuantity] = useState(INITIAL_QUANTITY);
  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(price);

  const calculateTotal = (value) => {
    const sum = price * value;
    
    setQuantity(value);
    setTotal(sum);
  }

  return (
    <>
      <TouchableOpacity style={Styles.information} onPress={() => setVisible(!visible)}>
        <Text style={Styles.name}>{name}</Text>
        <Text style={Styles.description}>{description}</Text>
        <Text style={Styles.price}>{CurrencyFormat(price)}</Text>
      </TouchableOpacity>

      {visible && <View style={Styles.cart}>
        <View>
          <View style={Styles.total}>
            <Text style={Styles.description}>Quantidade:</Text>
            <InputNumber style={Styles.amount} value={quantity} onChanceText={calculateTotal} />
          </View>

          <View style={Styles.total}>
            <Text style={Styles.description}>Total:</Text>
            <Text style={Styles.price}>{CurrencyFormat(total)}</Text>
          </View>
        </View>

        <Button
          text="Adicionar ao carrinho"
          onPress={() => {}} 
        />
      </View>}
      <View style={Styles.divider} />
    </>
  )
}

export default Items;