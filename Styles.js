import React from 'react'
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        height: Constants.statusBarHeight,
        backgroundColor: '#85c47c',
        width: '100%',
    },
    title: {
        top: 0,
        width: '100%',
        backgroundColor: '#85c47c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleFont: {
        color: 'black',
        fontSize: 30,
        padding: 10,
    },
    loginContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    loginContainerContent: {
        top:'10%',
        marginVertical:10
    },
    loginTitle: {
        fontSize:20,
        marginVertical:10,
        color:'#85c47c'
    },
    spacer: {
        marginVertical:10
    },
    loginBox: {
        borderColor: '#85c47c',
        borderWidth: 2,
        borderRadius: 10,
        width:"80%",
        padding: 5,
        marginTop:'20%'
    } ,
    bottomView:{
        marginVertical:'50%',
        
    }
});

export default styles