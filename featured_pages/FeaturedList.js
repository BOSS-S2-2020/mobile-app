import React from 'react'
import { View, Text, FlatList,Image} from 'react-native';
import Styles from './FeaturedStyles'

var comp;
function setSearch(){
    console.log(comp.state.search)
}
const ListItem = ({walkName,subtitle,duration}) => {
    return(
    <View style={Styles.ListItem}>
        <View>
            <Text style={Styles.ListTitle}>
                {walkName}
            </Text>
            <Text style={Styles.ListSubtitle}>
                {subtitle}
            </Text>
        </View>
        <View style={Styles.ListDuration}>
            <Text>{duration}</Text>
        </View>
    </View>
    )
}

function populateData(data,array,timeFilter){
    var aRCount = 0
    for(var i = 0; i < data.length; i++){
        //time filter
        if(data[i].duration <= timeFilter){
            array[aRCount] = data[i]
            aRCount++
        }
    }
    if(array.length === 0){
        array[0] = [{walkName:"no result found"}]
    }
}
const renderItem = ({item}) => (
    <ListItem walkName={item.walkName} subtitle={item.park} duration={item.duration}/>
);
const FeaturedList = (props) => {
    const data = []
    populateData(props.walks,data,props.timeFilter)
    comp = props.comp
    setSearch()
    return(
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.walkName}
            style={Styles.ListStyle}
        />

    )
}
export default FeaturedList;