import React from 'react'
import { View, Text, TouchableOpacity, Linking, Alert} from 'react-native';
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
                    <Text>{props.item.duration.charAt(0).concat(props.item.duration.charAt(1)).concat(":").concat(props.item.duration.charAt(2)).concat(props.item.duration.charAt(3))}</Text>
                </View>
            </View>
            <TouchableOpacity style={Styles.SearchButton} onPress={() => {Linking.openURL(props.item.mapURL)}}>
                <Text style={Styles.searchButtonText}>Download Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.SearchButton} onPress={() => {
                url = "https://boss-bushwalkers.firebaseio.com/walkRegistrations.json"
                if(global.userAccount != undefined){
                fetch(url,{
                    method: 'POST',
                    body : JSON.stringify({
                        user : global.userAccount.name,
                        walkName : props.item.walkName,
                        parkName : props.item.parkName,
                        EA : global.userAccount.emergancyAlert,
                        TimeRegistered : Date.parse(new Date())
                    })
                })
                Alert.alert("You have been registered for this walk")
                }else{
                    Alert.alert("Please log in first")
                }
            }}>
                <Text style={Styles.searchButtonText}>Register for Walk</Text>
            </TouchableOpacity>
            
        </View>
    )
    }

export default FeaturedSearch

