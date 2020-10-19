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
    //for FeaturedHome.js
    //Search bar
    searchBar : {
        height:"100%",
        width:"70%",
        backgroundColor:"#f2f2f2",
        borderRadius:50,
        padding:5,
        marginHorizontal:20
    },
    searchButton : {
        justifyContent:"center"
    },
    searchView : {
        flexDirection: 'row',
        width:"80%",
        marginVertical:10
    },
    //Carousel
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
      height:"40%",
    },
    swipeView : {
        height:"60%",
        width:"90%",
        backgroundColor:"lightgray",
    },
    carouselBackground : {
        flex: 1,
        resizeMode: "cover",
        width:"100%",
    },
    carouselInnerView : {
        marginTop:"auto",
        width:"100%",
        backgroundColor:'rgba(255,255,255,0.5)',
    },
    //Filters
    filterView : {
        marginVertical:"-40%",
        flexDirection: "row"
    },
    filterButton : {
        backgroundColor : '#85c47c',
        borderRadius: 50,
        marginHorizontal:"5%",
        padding:"1%",
        width:"13%",
        height:"30%",
        justifyContent:"center"
    },
    //List
    ListView : {
        borderTopWidth:1,
        top:"10%",
        width:"100%",
    },
    ListItem : {
        flexDirection:"row",
        width:"100%",
        borderBottomWidth:2,
        borderColor:"lightgrey",
        paddingTop:"2%",
        paddingBottom:"6%",
        paddingLeft:"1%"
    },
    ListTitle : {

    },
    ListSubtitle : {
        fontSize:11
    },
    ListStyle : {
        height:"30%",

    },
    ListDuration : {
        marginLeft:'auto',
        marginRight:"5%",
      
    },
    SearchCard : {
        top:"-40%",
        backgroundColor:"#f2f2f2",
        width:"95%",
        height:"100%",
        borderRadius:20,
        padding:"2%"


    },
    gridViewRow:{
        flexDirection:"row",
        width:"100%",
        marginLeft:10
    },
    gridRowChild:{
        marginHorizontal:50,
        fontSize:15,
        width:"70%"
    },
    gridRowHeader:{
        color:"#85c47c",
        fontWeight:"bold",
        alignContent:"flex-start",
        width:"30%"
    },
    SearchButton:{
        alignItems:"center",
        padding:"2%",
        backgroundColor:"#85c47c",
        marginVertical:"5%",
        height:"15%",
        justifyContent:"center"
    },
    searchButtonText:{
        fontSize:20
    }
});


export default styles