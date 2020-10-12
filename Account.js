import React from 'react'
import { View, Text, Button, TextInput,Alert} from 'react-native';
import Styles from './Styles'
import AccountDatabase from './resources/AccountDatabase'

AccountDatabase.loadAccounts();
global.userAccount = {
    name: "Max Kaeding",
    email: "mxkaeding@gmail.com",
    phone: "0432396385",
    emergancyAlert: 0
};
var enterAccount = 4;
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
var newAccount

class Account extends React.Component {
    state = {
        buttonTitle: "Yes",
        buttonColor: "#85c47c"
    }
    onPress = () => {
        if(this.state.buttonTitle === "Yes"){
            this.setState({
                buttonTitle:"No",
                buttonColor: "lightgray",
                
            })
            newAccount.emergancyAlert = 0
        }else{
            this.setState({
                buttonTitle: "Yes",
                buttonColor: "#85c47c"
            })
            newAccount.emergancyAlert = 1
        }
        
    }
    render() {
        if (global.userAccount == undefined) {
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
                            <Button title="New Account" onPress={() => setAccountState(this,2)} />
                            <View style={Styles.spacer}></View>
                            <Button title="Forgot Password" onPress={() => console.log(1)
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
                       <TextInput style={Styles.loginBox} placeholder={"Password"} onChangeText={text => passwordInput=text}></TextInput>
                       <View style={Styles.spacer}></View>
                       <Button title="Log in" onPress={() => CheckLogin(this,usernameInput,passwordInput)}/>
                       <View style={Styles.bottomView}>
                            <Button title="Back" onPress={() => setAccountState(this,0)}/>
                        </View>
                    </View>
                )
            }
            if(enterAccount == 2){
                newAccount = {
                    name : "",
                    password : "",
                    email : "",
                    phone : "",
                    emergancyAlert: 0
                }
                
                return (
                    <View style={Styles.loginContainer}>
                        <View style={Styles.topBar}></View>
                        <View style={Styles.title}>
                            <Text style={Styles.titleFont}>Create Account</Text>
                        </View>  
                        <View style={Styles.sigupContainerContent}>
                            <Text style={{fontSize:20}}>Username</Text>                           
                        </View>
                        <TextInput style={Styles.signupBox} placeholder={"Username"} onChangeText={text => newAccount.name=text}></TextInput>
                        <View style={Styles.signupContainerContent}>
                            <Text style={{fontSize:20}}>Password</Text>                           
                        </View>
                        <TextInput style={Styles.signupBox} placeholder={"Password"} onChangeText={text => newAccount.password=text}></TextInput>
                        <View style={Styles.sigupContainerContent}>
                            <Text style={{fontSize:20}}>Email</Text>                           
                        </View>
                        <TextInput style={Styles.signupBox} placeholder={"Email"} onChangeText={text => newAccount.email=text}></TextInput>
                        <View style={Styles.signupContainerContent}>
                            <Text style={{fontSize:20}}>Phone</Text>                           
                        </View>
                        <TextInput style={Styles.signupBox} placeholder={"Phone"} onChangeText={text => newAccount.phone=text}></TextInput>
                        <View style={Styles.switchBox}>
                            <Text>Do you want to sign up for automatic alerts upon failure to return from a walk?</Text>
                            <Button color={this.state.buttonColor} title={this.state.buttonTitle} onPress={this.onPress}/>
                        </View>
                        <View style={Styles.sigupContainerContent}>
                            <Button title={"Create New Account"} onPress={() => checkForExistingAccount(this,newAccount)}/>
                        </View>
                    </View>
                )
            }
        }
        if(enterAccount === 4){
            return (
                <View style={Styles.loginContainer}>
                    <View style={Styles.topBar}></View>
                    <View style={Styles.title}>
                        <Text style={Styles.titleFont}>{global.userAccount.name}</Text>
                    </View>
                        <View style={Styles.gridViewRow}>
                            <Text style={Styles.gridRowChild,Styles.gridRowHeader}>Email</Text>
                            <Text style={Styles.gridRowChild}>{global.userAccount.email}</Text>
                        </View>
                        <View style={Styles.gridViewRow}>
                        <Text style={Styles.gridRowChild,Styles.gridRowHeader}>Phone</Text>
                            <Text style={Styles.gridRowChild}>{global.userAccount.phone}</Text>
                        </View>
                </View>  
            )
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
function CheckLogin(comp,username, password) {
    if(AccountDatabase.setAccount(username, password)){
        const acc = AccountDatabase.getAccountInfo()
        global.userAccount = {
            name : acc.Name,
            phone : acc.Phone,
            email : acc.Email,
            emergancyAlert : acc.EmergancyAlert
        }
        newAccount = 
        setAccountState(comp,4)
    }else{
        Alert.alert("Account not found, try again")
    }   
}
function checkForExistingAccount(comp,returnForm){
    if(AccountDatabase.getExistingAccount(returnForm.name)){
        Alert.alert('Username exists, please try again');
        return
    }
    if(returnForm.name === "" || returnForm.password === "" || returnForm.phone === "" || returnForm.email === ""){
        Alert.alert('Please ensure all fields are filled')
        return
    }
    AccountDatabase.createAccount(returnForm.name,returnForm.email,returnForm.emergancyAlert,returnForm.phone,returnForm.password,returnForm.password)
    AccountDatabase.loadAccounts()
    global.userAccount = returnForm;
    setAccountState(comp,4)

}
export default Account;