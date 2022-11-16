import { StyleSheet } from 'react-native';
import { pallete } from '../../styles/global';

export default StyleSheet.create({
  content: {
    backgroundColor: pallete.purple,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },

  contatiner: {
    alignItems: 'center',
  },

  description: {
    fontSize: 16,
    color: pallete.light,
    fontWeight: 'bold',
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: pallete.orange,
  },

  button: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});