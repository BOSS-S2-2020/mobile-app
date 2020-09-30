import React from 'react'
import { View, Text } from 'react-native';
import Styles from './Styles'

class Parks extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.topBar}></View>
                <View style={Styles.title}>
                    <Text style={Styles.titleFont}>Parks</Text>
                </View>
                <View style={Styles.container}>
                    <Text>will give an overview of all the registered parks</Text>
                </View>
            </View>
        )
    }
}
export default Parks;