import React from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import Styles from './Styles'


/*const firebaseConfig = {
    apiKey: "AIzaSyAhJ_Wbl80bYYcjy3MXDtvi6pKaKs_dkeU",
    authDomain: "boss-bushwalkers.firebaseapp.com",
    databaseURL: "https://boss-bushwalkers.firebaseio.com/",
    projectId: "boss-bushwalkers",
    storageBucket: "boss-bushwalkers.appspot.com",
    messagingSenderId:"129541840557",
    appId: "1:129541840557:web:aa81ebd24dcc466f4bf024",
    measurementId: "G-TF8TK2E92K"
  };
  firebase.initializeApp(firebaseConfig);
*/
global.isSignedIn = false;
var enterAccount = 0;
/*
    enterAccount:
    0 - initalState
    1 - sign in
    2 - new account
    3 - forgot password
*/
var emailInput;
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
                            <Button title="New Account" onPress={() => global.isSignedIn = true} />
                            <View style={Styles.spacer}></View>
                            <Button title="Forgot Password" onPress={() => global.isSignedIn = true} />                            
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
                            <Text style={{fontSize:20}}>Enter Email Address</Text>                           
                       </View>
                       <TextInput style={Styles.loginBox} placeholder={"Email"} onChangeText={text => emailInput=text}></TextInput>
                       <View style={Styles.loginContainerContent}>
                            <Text style={{fontSize:20}}>Enter Password</Text>                           
                       </View>
                       <TextInput style={Styles.loginBox} placeholder={"Password"} onChangeText={text => passwordInput=text}></TextInput>
                       <View style={Styles.spacer}></View>
                       <Button title="Log in" onPress={() => CheckLogin(emailInput,passwordInput)}/>
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
function CheckLogin(email,password){
   /* auth
        .signInWithEmailAndPassword(email,password)
        .then(() => console.log("Yay"))
        .catch(error => console.log(":("))*/
        
}
export default Account;