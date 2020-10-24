import React from 'react'
import { View, Text, Button, TextInput,Alert} from 'react-native';
import AccountDatabase from './account_pages/AccountDatabase'

import SignInPage from './account_pages/SignInPage'
import AccountMenu from './account_pages/AccountMenu'
import CreateAccount from './account_pages/CreateAccount'
import AccountInfo from './account_pages/AccountInfo'

AccountDatabase.loadAccounts();
global.userAccount;
var enterAccount = 0;
/*
    enterAccount:
    0 - initalStated
    1 - sign in
    2 - new account
    4 - Logged In
*/
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
           global.newAccount.emergancyAlert = 0
        }else{
            this.setState({
                buttonTitle: "Yes",
                buttonColor: "#85c47c"
            })
            global.newAccount.emergancyAlert = 1
        }
        
    }
    render() {
            if (enterAccount == 0) {
                return (  
                    <AccountMenu toSignIn={() => setAccountState(this,1)} toCreateNewAccount={() => setAccountState(this,2)} />
                )
            }
            if(enterAccount == 1){
                return (
                    <SignInPage backRefresh={() => setAccountState(this,0)} completedRefresh={() => CheckLogin(this,global.usernameInput,global.passwordInput)}/>
                )
            }
            if(enterAccount == 2){
                return(
                    <CreateAccount checkforAccount={() =>  checkForExistingAccount(this,global.newAccount)} refreshBack={() => setAccountState(this,0)}>
                    <Button color={this.state.buttonColor} title={this.state.buttonTitle} onPress={this.onPress}/>
                    </CreateAccount>
                )
            }
        if(enterAccount === 4){
            return (
                <AccountInfo signOut={() => signOutOfAccount(this)}/>
            )
        }
    }
}
function setAccountState(comp,target){
    enterAccount = target;
    comp.forceUpdate();
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
function signOutOfAccount(comp){
    global.userAccount = {}
    global.usernameInput = "";
    setAccountState(comp,0)
}
export default Account;