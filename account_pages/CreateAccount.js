import React from 'react'
import { View, Text, Button, TextInput,ScrollView } from 'react-native';
import Styles from './AccountStyles'

global.newAccount = {
    name : "",
    password : "",
    email : "",
    phone : "",
    emergancyAlert: 0
}
const createAccount = (props) => {
   
    return (
        <View style={Styles.loginContainer}>
            <View style={Styles.topBar}></View>
            <View style={Styles.title}>
                <Text style={Styles.titleFont}>Create Account</Text>
            </View>  
            <View style={Styles.sigupContainerContent}>
                <Text style={{fontSize:20}}>Username</Text>                           
            </View>
            <TextInput style={Styles.signupBox} placeholder={"Username"} onChangeText={text => global.newAccount.name=text}></TextInput>
            <View style={Styles.signupContainerContent}>
                <Text style={{fontSize:20}}>Password</Text>                           
            </View>
            <TextInput style={Styles.signupBox} placeholder={"Password"} onChangeText={text => global.newAccount.password=text}></TextInput>
            <View style={Styles.sigupContainerContent}>
                <Text style={{fontSize:20}}>Email</Text>                           
            </View>
            <TextInput style={Styles.signupBox} placeholder={"Email"} onChangeText={text => global.newAccount.email=text}></TextInput>
            <View style={Styles.signupContainerContent}>
                <Text style={{fontSize:20}}>Phone</Text>                           
            </View>
            <TextInput style={Styles.signupBox} placeholder={"Phone"} onChangeText={text => global.newAccount.phone=text}></TextInput>
            <View style={Styles.switchBox}>
                <Text>Do you want to sign up for automatic alerts upon failure to return from a walk?</Text>
                {props.children}
            </View>
            <View style={Styles.sigupContainerContent}>
                <Button title={"Create New Account"} onPress={props.checkforAccount}/>
            </View>
            <View style={Styles.spacer}></View>
            <Button title={"Back"} onPress={props.refreshBack}/>
        </View>
    )
}
export default createAccount