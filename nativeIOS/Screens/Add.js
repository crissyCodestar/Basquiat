import React from 'react';
import {
  StyleSheet,
	Text,
	View
} from 'react-native';

class Add extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
					<Text>Add</Text></View>
				<View style={{flex: 2, backgroundColor: 'skyblue'}} />

				<View style={{flex: 3, backgroundColor: 'steelblue'}} />

			</View>
		);
	}
}

export default Add;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});
