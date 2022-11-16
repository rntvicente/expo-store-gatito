import { StyleSheet } from 'react-native';
import { pallete } from '../../../src/styles/global';

export default (smart, reverse) => StyleSheet.create({
  button: {
    width: 140,
    height: 60,
    paddingVertical: smart ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: reverse ? pallete.orange : pallete.purple,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: reverse ? pallete.purple : pallete.orange,
  }
});