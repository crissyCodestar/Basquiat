import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Styles/Explore.style.js';

class Explore extends React.Component {

	//Styling for Andriod to accomadate status bar
	componentWillMount(){
		this.startHeaderHeight= 80;
		if (Platform.OS === 'android'){
			this.startHeaderHeight = 100 + StatusBar.currentHeight;
		}
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.flexOne} >
					<View style={styles.topSection} >
						<View style={styles.searchView} >
							<Icon
								name="ios-search"
								size={20} style={styles.searchIcon}/>
							<TextInput
								underlineColorAndroid="transparent"
								placeholder="Try Bushwick"
								placeholderTextColor="grey"
								style={styles.searchTextInput}
							/>
						</View>
					</View>
					<ScrollView
						scrollEventThrottle={16}
					>
						<View style={styles.scrollView}>
							<Text style={styles.scrollText}>
                      Find the next Basquiat!
							</Text>
							<View style={styles.scrollImgContainer}>
								<ScrollView>
									<View style={styles.scrollImgView}>
										<View style={styles.scrollImages}>
											<Image source={require('../')}
											/>
										</View>
									</View>

								</ScrollView>
							</View>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}

export default Explore;
