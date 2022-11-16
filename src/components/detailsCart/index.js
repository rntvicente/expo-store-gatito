import { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import InputNumber from "../input"
import Button from "../button"
import CurrencyFormat from "../../utils/currency-format"

import Styles from "./styles"

function Items ({ name, price, description, amount }) {
  const [quantity, setQuantity] = useState(amount);
  const [total, setTotal] = useState(price * amount);

  const calculateTotal = (value) => {
    const sum = price * value;
    
    setQuantity(value);
    setTotal(sum);
  }

  return (
    <>
      <View style={Styles.information}>
        <Text style={Styles.name}>{name}</Text>
        <Text style={Styles.description}>{description}</Text>
        <Text style={Styles.price}>{CurrencyFormat(price)}</Text>
      </View>

      <View style={Styles.cart}>
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
          text="Remover do carrinho"
          onPress={() => {}} 
          />
      </View>
      <View style={Styles.divider} />
    </>
  )
}

export default Items;