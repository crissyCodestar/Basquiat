import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
  // Comopnent Sections
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
  //Text Component
  topSection: {
    height:80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height:this.startHeaderHeight
  },
  //Search bar
  searchTextInput: {
    flex:1,
    fontWeight: '700',
    backgroundColor: 'white',
    },
  searchView: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowOffset: {width: 0, height:0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    marginTop: Platform.OS == 'android' ? 30 : null,
    //Andriod
    elevation:1
  },
  searchIcon: {
    marginRight: 10
  },

  //Header Text
  scrollView: {
    flex:1,
		backgroundColor: 'white',
		paddingTop: 20
	},
	scrollText: {
    fontSize:24,
		fontWeight: '700',
		paddingHorizontal: 20
	},
  // Horizontal Header Image Scrolling
  scrollImgContainer: {
    height: 130,
    marginTop:20
  },
  scrollImgView: {
    height: 130,
    width: 130
  },
  scrollImages: {
    flex: 2
  }



});
