import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',

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
    //for Featured.js
    itemView:{
        marginVertical:"5%",
        borderColor:"black",
        borderWidth:2,
        alignItems:"center",
        padding:4
    },
    itemTitle:{
        fontSize:30,
    },
    itemSubtitle:{
        fontSize:25
    },
    itemBottomBar:{
        backgroundColor:"#85c47c",
        padding:10,
        borderColor:"black",
        borderTopWidth:2,
        borderBottomWidth:2,
        alignItems:"center"
    },
    itemBottomItem:{
        borderColor:"black",
        borderWidth:2,
        
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});


export default styles