import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 115,
    height: 115,
    overflow: 'hidden',
  },
  content: {
    flex: 3,
    justifyContent: 'center'
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
  },
  contactContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignContent: 'stretch',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 2,
    margin: 10
  },
});
