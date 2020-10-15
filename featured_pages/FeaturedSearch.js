import React from 'react'
import { View, Text, StyleSheet, FlatList, Linking} from 'react-native';
import Styles from './FeaturedStyles'

class FeaturedSearch extends React.Component{
    render(){
    return (
        <View style={Styles.container} >
            <View style={Styles.topBar}></View>
            <View style={Styles.title}>
                <Text style={Styles.titleFont}>Search</Text>
            </View>
            <View>
                <Text>Test</Text>
            </View>
        </View>
    )
    }
}
export default FeaturedSearch