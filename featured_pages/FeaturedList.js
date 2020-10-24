import React from 'react'
import { View, Text, FlatList,TouchableOpacity} from 'react-native';
import Styles from './FeaturedStyles'

var comp;
function setSearch(){
}
const ListItem = ({walkName,subtitle,duration,mapURL}) => {
    return(
    <TouchableOpacity style={Styles.ListItem} onPress={() => {
        console.log(mapURL)
        comp.setState({
            searchItem:{walkName:walkName,parkName:subtitle,duration:duration,mapURL:mapURL}
        })
        comp.setState({search:true})
        }}>
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
    </TouchableOpacity>
    )
}

function populateData(data,array,timeFilter,textFilter){
    var aRCount = 0
    for(var i = 0; i < data.length; i++){
        //time filter
        if(data[i].duration <= timeFilter){
            if((data[i].walkName.includes(textFilter))||(data[i].park.includes(textFilter))){
                array[aRCount] = data[i]
                aRCount++
            }
        }
    }
    if(array == []){
        array[0] = [{walkName:"no result found"}]
    }
}
const renderItem = ({item}) => (
    <ListItem walkName={item.walkName} subtitle={item.park} duration={item.duration} mapURL={item.mapURL}/>
);
const FeaturedList = (props) => {
    const data = []
    comp = props.comp
    populateData(props.walks,data,props.timeFilter,props.textFilter)
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