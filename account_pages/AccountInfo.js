import React from 'react'
import { View, Text, Button, TextInput,ScrollView } from 'react-native';
import Styles from './AccountStyles'

const AccountInfo = (props) => {
    var isEmergency;
    if(global.userAccount.emergancyAlert == 1){
        isEmergency = "Enabled"
    }else{
        isEmergency = "Disabled"
    }
    return (
        <View style={Styles.loginContainer}>
            <View style={Styles.topBar}></View>
            <View style={Styles.title}>
                <Text style={Styles.titleFont}>{global.userAccount.name}</Text>
            </View>
                <View style={Styles.gridViewRow}>
                    <Text style={Styles.gridRowHeader}>Email</Text>
                    <Text style={Styles.gridRowChild}>{global.userAccount.email}</Text>
                </View>
                <View style={Styles.gridViewRow}>
                <Text style={Styles.gridRowHeader}>Phone</Text>
                    <Text style={Styles.gridRowChild}>{global.userAccount.phone}</Text>
                </View>
                <View style={Styles.gridViewRow}>
                <Text style={Styles.gridRowHeader}>Emergency Alert</Text>
                    <Text style={Styles.gridRowChild}>{isEmergency}</Text>
                </View>
                <View style={Styles.divider}/>
                <View style={Styles.spacer}/>
                <Button title={"Sign Out"} onPress={props.signOut}/>
        </View>  
    )
}

export default AccountInfo