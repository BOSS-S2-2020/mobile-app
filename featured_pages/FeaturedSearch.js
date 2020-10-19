import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import Styles from './FeaturedStyles'
import { FontAwesome5 } from '@expo/vector-icons';
const FeaturedSearch = (props) => {
    return (
        <View >
            <TouchableOpacity style={{alignItems:"center"}} onPress={props.reset}>
                <FontAwesome5 name="chevron-down" size={40} color="black"/>
            </TouchableOpacity>
            <Text style={Styles.titleFont}>{props.item.walkName}</Text>
            <View style={Styles.gridViewRow}>
                <View style={Styles.gridRowHeader}>
                    <Text>Park</Text>
                </View>
                <View style={Styles.gridRowChild}>
                    <Text>{props.item.parkName}</Text>
                </View>
            </View>
            <View style={Styles.gridViewRow}>
                <View style={Styles.gridRowHeader}>
                    <Text>Duration</Text>
                </View>
                <View style={Styles.gridRowChild}>
                    <Text>{props.item.duration}</Text>
                </View>
            </View>
            <TouchableOpacity style={Styles.SearchButton}>
                <Text style={Styles.searchButtonText}>Download Map</Text>
            </TouchableOpacity>
            
            
        </View>
    )
    }

export default FeaturedSearch

//<TouchableOpacity style={Styles.SearchButton}>
//<Text style={Styles.searchButtonText}>Go To Live Map</Text>
//</TouchableOpacity>