import React from 'react'
import { View, Text } from 'react-native';
import Styles from './Styles'

class Search extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.topBar}></View>
                <View style={Styles.title}>
                    <Text style={Styles.titleFont}>Search</Text>
                </View>
                <View style={Styles.container}>
                    <Text>will allow users to search through walks</Text>
                </View>
            </View>
        )
    }
}
export default Search;