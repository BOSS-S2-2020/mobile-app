import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import styles from './Styles'


const WalkItem = ({WalkkName,Park,Duratoion,MapLink}) => (
    <View>
        <Text>WalkkName</Text>
        <Text>Park</Text>
        <Text>Duratoion</Text>
        <Button title="Download Map" onPress={() => Linking.openURl(MapLink)}/>
    </View>

);
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