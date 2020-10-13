import React from 'react'
import { View, Text, Button} from 'react-native';
import Styles from './AccountStyles'

const AccountMenu = (props) => {
    return (
        <View style={Styles.loginContainer}>
            <View style={Styles.topBar}></View>
            <View style={Styles.title}>
                <Text style={Styles.titleFont}>Account</Text>
            </View>
            <View style={Styles.loginContainerContent}>
                <Text style={Styles.loginTitle}>Sign in or Create an Account</Text>
                <View style={Styles.spacer}></View>
                <Button title="Log into BOSS" onPress={props.toSignIn} />
                <View style={Styles.spacer}></View>
                <Button title="New Account" onPress={props.toCreateNewAccount} />
     
            </View>
        </View>
    )
}
export default AccountMenu