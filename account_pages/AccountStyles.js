import { StyleSheet, Dimensions } from 'react-native';
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
        marginVertical:10,
        alignItems: 'center',
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
        marginVertical:'2%',
        
    },
    signupContainerContent: {
        marginVertical:10
    },
    signupBox: {
        borderColor: '#85c47c',
        borderWidth: 2,
        borderRadius: 10,
        width:"80%",
        padding: 5,
        
    } ,
    switchBox:{
        flexDirection:"row",
        marginLeft:"20%",
        marginRight:"20%",
        marginVertical:10
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
    divider:{
        height:1,
        borderColor:"black",
        borderWidth:1,
        width:"100%"
    },
})
export default styles;