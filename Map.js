import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native';
import MapView, {
    Animated,
    TouchableOpacity,
    Platform } from 'react-native-maps';
import MapData from './MapData';

class Map extends React.Component {
    //state = {
    //    coordinates: [
    //        { name: 'Park1', latitude: -35.267758, longitude: 149.079150 },
    //        { name: 'Park2', latitude: -35.269278, longitude: 149.163692 },
    //        { name: 'Park3', latitude: -35.267758, longitude: 149.119234 }
    //    ]
    //}
   
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={_map}
                    //initialRegion={state.region}
                    style={styles.container}
                    provider={PROVIDER_GOOGLE}
                   // customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
                >
            
               
                            <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
                                <Animated.View style={[styles.markerWrap]}>
                                    <Animated.Image
                                        source={require('../assets/map_marker.png')}
                                        style={[styles.marker, scaleStyle]}
                                        resizeMode="cover"
                                    />
                                </Animated.View>
                            </MapView.Marker>
                    
                </MapView>
                <View style={styles.searchBox}>
                    <TextInput
                        placeholder="Search here"
                        placeholderTextColor="#000"
                        autoCapitalize="none"
                        style={{ flex: 1, padding: 0 }}
                    />
                    <Ionicons name="ios-search" size={20} />
                </View>

                //cards 
                <Animated.ScrollView
                    ref={_scrollView}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH + 20}
                    snapToAlignment="center"
                    style={styles.scrollView}
                    contentInset={{
                        top: 0,
                        left: SPACING_FOR_CARD_INSET,
                        bottom: 0,
                        right: SPACING_FOR_CARD_INSET
                    }}
                    contentContainerStyle={{
                        paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
                    }}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: mapAnimation,
                                    }
                                },
                            },
                        ],
                        { useNativeDriver: true }
                    )}
                >
                    {state.markers.map((marker, index) => (
                        <View style={styles.card} key={index}>
                            <Image
                                source={marker.image}
                                style={styles.cardImage}
                                resizeMode="cover"
                            />
                            <View style={styles.textContent}>
                                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                                <StarRating ratings={marker.rating} reviews={marker.reviews} />
                                <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
                                <View style={styles.button}>
                                    <TouchableOpacity
                                        onPress={() => { }}
                                        style={[styles.signIn, {
                                            borderColor: '#FF6347',
                                            borderWidth: 1
                                        }]}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#FF6347'
                                        }]}>Order Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </Animated.ScrollView>
            </View>
            //<MapView
            //    provider={PROVIDER_GOOGLE}
            //    style={styles.map}
            //    region={{
            //        latitude: -35.35000,
            //        longitude: 149.16670,
            //        latitudeDelta: 0.09,
            //        longitudeDelta: 0.035
            //    }}>

            //    <Marker
            //        coordinate={{ latitude: -35.267758, longitude: 149.079150 }}
            //        title="Aranda Bushlland Nuture Reserve"
            //        description="This is great park " >
            //        <Callout tooltip>
            //            <View>
            //                <View style={styles.bubble}>
            //                    <Text style={styles.name}>Favourite Restaurant</Text>
            //                    <Text>A short description</Text>
            //                    <Image
            //                        style={styles.image}
            //                        source={require('../assets/park1.jpg')}
            //                    />

            //                </View>
            //                <View style={styles.arrowBorder} />
            //                <View style={styles.arrow} />
            //            </View>
            //        </Callout>
            //    </Marker>

            //</MapView >


        );
    }
};


const styles = StyleSheet.create({
    map: {
        height: '100%'
    },
    // Callout bubble
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
    },
    // Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
    },
    // Character name
    name: {
        fontSize: 16,
        marginBottom: 5,
    },
    // Character image
    image: {
        width: "100%",
        height: 80,
    },
    container: {
        flex: 1,
    },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    chipsScrollView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 90 : 80,
        paddingHorizontal: 10
    },
    chipsIcon: {
        marginRight: 5,
    },
    chipsItem: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    marker: {
        width: 30,
        height: 30,
    },
    button: {
        alignItems: 'center',
        marginTop: 5
    },
    signIn: {
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }

});

export default Map;
