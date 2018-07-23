import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './Screens/Explore';
import Add from './Screens/Add';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Saved from './Screens/Saved';



export default createBottomTabNavigator({
	Home:{
		screen:Home,
		//Vector icon declarations for each of the bottom buttons
		navigationOptions:{
			tabBarLabel: 'HOME',
			//tintColor changes all non-transparent pixels to the tintColor
			tabBarIcon: ({ tintColor }) => (
				<Icon name="ios-home-outline" color={tintColor} size={24}/>
			)
		}
	},
	Explore: {
		screen:Explore,
		navigationOptions:{
			tabBarLabel: 'EXPLORE',
			tabBarIcon: ({ tintColor }) => (
				<Icon name="ios-search-outline" color={tintColor} size={24}/>
			)
		}

	},
	Add: {
		screen:Add,
		navigationOptions:{
			tabBarLabel: 'ADD',
			tabBarIcon: ({ tintColor }) => (
				<Icon name="ios-add-outline" color={tintColor} size={24}/>
			)
		}

	},
	Saved: {
		screen:Saved,
    navigationOptions:{
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart-outline" color={tintColor} size={24}/>
      )
    }

	},
	Profile: {
		screen:Profile,
    navigationOptions:{
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person-outline" color={tintColor} size={24}/>
      )
    }
	}
},{
  tabBarOptions:{
    activeTintColor:'blue',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor: 'white',
      borderTopWidth:0,
      shadowOffset:{width:5, height:3},
      shadowColor: 'black',
      shadowOpacity:0.5,
      //Andriod spacing for top portion
      elevation:0.5

    }
  }
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});
