import React from 'react'
import { View, Text, Button, TextInput,Alert} from 'react-native';
import Styles from './AccountStyles'
global.usernameInput;
global.passwordInput;
const SignInPage = (props) => {
    return (
        <View style={Styles.loginContainer}>
            <View style={Styles.topBar}></View>
            <View style={Styles.title}>
                <Text style={Styles.titleFont}>Account</Text>
            </View>
            <View style={Styles.loginContainerContent}>
                <Text style={{ fontSize: 20 }}>Enter Username</Text>
            </View>
            <TextInput style={Styles.loginBox} placeholder={"Username"} onChangeText={text => global.usernameInput = text}></TextInput>
            <View style={Styles.loginContainerContent}>
                <Text style={{ fontSize: 20 }}>Enter Password</Text>
            </View>
            <TextInput style={Styles.loginBox} placeholder={"Password"} onChangeText={text => global.passwordInput = text}></TextInput>
            <View style={Styles.spacer}></View>
            <Button title="Log in" onPress={props.completedRefresh} />
            <View style={Styles.bottomView}>
                <Button title="Back" onPress={props.backRefresh} />
            </View>
        </View>
    );
}

export default SignInPage