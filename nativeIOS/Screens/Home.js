import React, {Component} from 'react';
import {
  StyleSheet,
	Text,
	View,
  SafeAreaView,
  TextInput
} from 'react-native';
import styles from '../Styles/Layout.screen.style.js';

class Home extends Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
        <View style={styles.flexOne}>
    				<View style={styles.pBlue} >
    					<Text>Home</Text>
              </View>
          </View>
    				<View style={{flex: 2, backgroundColor: 'skyblue'}} />

    				<View style={{flex: 3, backgroundColor: 'steelblue'}} />

			</SafeAreaView>
		);
	}
}

export default Home;
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 	},
//
// });
