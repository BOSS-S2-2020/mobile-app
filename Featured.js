import React from 'react'
import { View, Text, StyleSheet, FlatList, Linking} from 'react-native';
import styles from './Styles'
import FeaturedDatabase from './resources/FeaturedDatabase'
import { FontAwesome5 } from '@expo/vector-icons';


var loadState = false;
FeaturedDatabase.loadParks();
const sampleWalk = [
    { walkName: "test", park: "testpark", duration: 2, mapLink: "https://www.google.com" },
    { walkName: "test2", park: "testpark2", duration: 3, mapLink: "https://www.google.com" },
]
const WalkItem = ({ walkName, park, duration, mapLink }) => (
    <View style={styles.itemView}>
        <Text style={styles.itemTitle}>{walkName}</Text>
        <Text style={styles.itemSubtitle}>{park}</Text>
        <View style={styles.itemBottomBar}>
            <Text stlye={styles.itemBottomItem}>{duration} Hours</Text>
            <Text stlye={styles.itemBottomItem} onPress={() => Linking.openURL(mapLink)}>Download Map</Text>
        </View>
    </View>
);
const list = ({ item }) => (
    <WalkItem walkName={item.walkName} park={item.park} duration={item.duration} mapLink={item.mapLink} />
);
class Featured extends React.Component {
    render() {
        if (!loadState) {
            return (
                <View style={styles.container} >
                    <View style={styles.topBar}></View>
                    <View style={styles.title}>
                        <Text style={styles.titleFont}>Featured</Text>
                    </View>
                    <View style={styles.container} >
                        <FontAwesome5 name='cog' size={50} color="black" />
                        <Text onPress={() => reload(this)}>Reload</Text>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.topBar}></View>
                    <View style={styles.title}>
                        <Text style={styles.titleFont}>Featured</Text>
                    </View>
                    <View style={styles.container}>
                        <FlatList
                            data={FeaturedDatabase.returnFormatedParks()}
                            renderItem={list}
                        />
                    </View>

                </View>
            )
        }
    }
}
function reload(comp){
    loadState = true;
    console.log(1)
    comp.forceUpdate()
}

export default Featured;