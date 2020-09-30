import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import styles from './Styles'
class Featured extends React.Component {
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.topBar}></View>
                <View style={styles.title}>
                    <Text style={styles.titleFont}>Featured</Text>
                </View>
                <View style={styles.container}>
                    <Text>have some featured walks based on popularity</Text>
                </View>
               
            </View>
            )
    }
}

export default Featured;