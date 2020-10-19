import React from 'react'
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import Styles from './FeaturedStyles'
import { FontAwesome5 } from '@expo/vector-icons';
import FeaturedCarousel from './FeaturedCarousel';
import FeaturedList from './FeaturedList';
import FeaturedDatabase from './FeaturedDatabase'
import FeaturedSearch from './FeaturedSearch';

const SearchSection = (props) => {

    if(props.comp.state.search == true){
        return(
    <View></View>
        )
    }else{
        return(
        <View style={Styles.SearchCard}>
            <FeaturedSearch reset={() => {props.comp.setState({search:true})}} item={props.comp.state.searchItem}/>
        </View>
        )
    }
} 
class FeaturedHome extends React.Component{
    state = {
        walksArray : [{walkName:"loading",parkName:"loading",duration:1,image:"https://reactjs.org/logo-og.png"}],
        timeFilter : 20000,
        search : false,
        searchItem : {walkName:"loading",parkName:"loading",duration:1,mapURL:"https://www.google.com"}
    }
    
    render(){
        FeaturedDatabase.loadParks(this)
    return (
        <View style={Styles.container} >
            <View style={Styles.topBar}></View>
            <View style={Styles.title}>
                <Text style={Styles.titleFont}>Featured</Text>
            </View>
            
            <View style={Styles.searchView}>
                <TextInput style={Styles.searchBar} placeholder="Search Parks"></TextInput>
                <View style={Styles.searchButton}><FontAwesome5 name='search' size={25} color='black'/></View>
            </View>

            <View>
                <FeaturedCarousel walks={this.state.walksArray}/>
            </View>
            <View style={Styles.filterView}>
                
                <TouchableOpacity style={Styles.filterButton} onPress={() => {this.setState({timeFilter : 30})}}>
                    <Text>{">"}30m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.filterButton} onPress={() => {this.setState({timeFilter : 100})}}>
                    <Text>{">"}1hr</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.filterButton} onPress={() => {this.setState({timeFilter : 400})}}>
                    <Text>{">"}4hr</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.filterButton} onPress={() => {this.setState({search:false})}}>
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>

        <View style={Styles.ListView}>
            <FeaturedList walks={this.state.walksArray.push} timeFilter={this.state.timeFilter} comp={this}  />
        </View>
            <SearchSection comp={this} />
        </View>
    )
    }
    
}
export default FeaturedHome