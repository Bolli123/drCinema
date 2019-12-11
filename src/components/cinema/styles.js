import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 115,
    height: 115,
    borderRadius: 115 / 2,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    alignContent: 'center',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 2,
  },
  name: {
    flex: 1.2,
    marginRight: 30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  website: {
    flex: 1,
    fontSize: 15,
    color: 'grey'
  },
  contactContainer: {
    flex: 1,
  },
});
