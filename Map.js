import React from 'react'
import { View, Text} from 'react-native';
import Styles from './Styles'
class Map extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.topBar}></View>
                <View style={Styles.title}>
                    <Text style={Styles.titleFont}>Map</Text>
                </View>
                <View style={Styles.container}>
                    <Text>will have a google/apple map showing where to go on walk</Text>
                </View>
            </View>
        )
    }
}
export default Map;