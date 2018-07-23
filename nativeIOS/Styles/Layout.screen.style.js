import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
	},
  pBlue: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexOne: {
    flex:1
  },
  topScroll: {
    height:80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  searchTextInput: {
    flex:1,
    fontWeight: '700',
    backgroundColor: 'white'
  },
  searchView: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowOffset: {width: 0, height:0},
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  searchIcon: {
    marginRight: 10
  }

});
