import React from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import Styles from './Styles'
import AccountDatabase from './resources/AccountDatabase'


AccountDatabase.createAccount("Max2", "NotMax@email.com", 1, "0433322322", "ihatewalkz");

global.isSignedIn = false;
var enterAccount = 0;
/*
    enterAccount:
    0 - initalState
    1 - sign in
    2 - new account
    3 - forgot password
    4 - Logged In
*/
var usernameInput;
var passwordInput;
class Account extends React.Component {
    render() {
        if (!global.isSignedIn) {
            if (enterAccount == 0) {
                return (  
                    <View style={Styles.loginContainer}>
                        <View style={Styles.topBar}></View>
                        <View style={Styles.title}>
                            <Text style={Styles.titleFont}>Account</Text>
                        </View>      
                        <View style={Styles.loginContainerContent}>
                            <Text style={Styles.loginTitle}>Sign in or Create an Account</Text>
                            <View style={Styles.spacer}></View>
                            <Button title="Log into BOSS" onPress={() => setAccountState(this,1)} />
                            <View style={Styles.spacer}></View>
                            <Button title="New Account" onPress={() => console.log(AccountDatabase.getAccountInfo())} />
                            <View style={Styles.spacer}></View>
                            <Button title="Forgot Password" onPress={() => console.log(AccountDatabase.setAccount("Max Kaeding", "ilove2walk"))
} />                            
                        </View>
                    </View>
                )
            }
            if(enterAccount == 1){
                return (
                    <View style={Styles.loginContainer}>
                        <View style={Styles.topBar}></View>
                        <View style={Styles.title}>
                            <Text style={Styles.titleFont}>Account</Text>
                        </View>  
                       <View style={Styles.loginContainerContent}>
                            <Text style={{fontSize:20}}>Enter Username</Text>                           
                       </View>
                       <TextInput style={Styles.loginBox} placeholder={"Username"} onChangeText={text => usernameInput=text}></TextInput>
                       <View style={Styles.loginContainerContent}>
                            <Text style={{fontSize:20}}>Enter Password</Text>                           
                       </View>
                       <TextInput style={Styles.loginBox} placeholder={"Password"} onChangeText={text => loadAccountFromPassword(text)}></TextInput>
                       <View style={Styles.spacer}></View>
                       <Button title="Log in" onPress={() => CheckLogin(usernameInput,passwordInput)}/>
                       <View style={Styles.bottomView}>
                            <Button title="Back" onPress={() => setAccountState(this,0)}/>
                        </View>
                    </View>
                )
            }
        }
        return (
            <View style={Styles.container}>
                <View style={Styles.topBar}></View>
                <View style={Styles.title}>
                    <Text style={Styles.titleFont}>Account</Text>
                </View>
                <View style={Styles.container}>
                    <Text>will allow user to manage account details</Text>
                </View>
            </View>
        )
    }
}
function setAccountState(comp,target){
    comp.forceUpdate();
    enterAccount = target;
}
function loadAccountFromPassword(password) {
    passwordInput = password
    AccountDatabase.setAccount(usernameInput, passwordInput)
}
function CheckLogin(username, password) {
    AccountDatabase.setAccount(username, password)
    console.log(AccountDatabase.getAccountInfo());    
}
export default Account;