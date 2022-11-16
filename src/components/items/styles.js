import { StyleSheet } from "react-native";
import { pallete } from "../../../src/styles/global";

export default StyleSheet.create({
  information: {
    padding: 24
  },

  name: {
    color: pallete.orange,
    fontWeight: 'bold',
    fontSize: 16,
  },

  calculate: {
    color: pallete.dark,
    fontSize: 14,
    marginVertical: 8,
  },

  price: {
    color: pallete.purple,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },

  divider: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: pallete.gray,
  },

  cart: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: "row", 
    justifyContent: "space-between"
  },

  total: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },

  description: {
    color: pallete.dark,
    fontSize: 16,
    marginRight: 8,
  },

  amount: {
    width: 42,
  }
});