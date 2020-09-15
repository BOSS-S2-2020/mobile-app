import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

class Map extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}></View>
                <View style={styles.title}>
                    <Text style={styles.titleFont}>Map</Text>
                </View>
                <View style={styles.container}>
                    <Text>will have a google/apple map showing where to go on walk</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        height: Constants.statusBarHeight,
        backgroundColor: 'darkolivegreen',
        width: '100%',
    },
    title: {
        top: 0,
        width: '100%',
        backgroundColor: 'darkolivegreen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleFont: {
        color: 'white',
        fontSize: 30,
        padding: 10,
    }
});


export default Map;