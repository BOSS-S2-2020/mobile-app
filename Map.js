import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, Animated, Dimensions, TouchableOpacity, TextInput,} from 'react-native';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import { locations } from './resources/MapData'
import getDirections from 'react-native-google-maps-directions'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapLive from './resources/MapLive';


const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;

var isLive = false
const Map = () => {
  
    const initialMapState = {
        locations,
        region: {
            latitude: -35.35000,
            longitude: 149.16670,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
        },
        isLive : false

    };
   const [state, setState] = React.useState(initialMapState);

    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);

    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= state.locations.length) {
                index = state.locations.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    const { coordinate } = state.locations[index];
                    _map.current.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: state.region.latitudeDelta,
                            longitudeDelta: state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    });

    //directions from google map
   const handleGetDirections = () => {
        const data = {
            source: {
                latitude: -35.272908,
                longitude: 149.080073
            },
            destination: {
                latitude: -35.269144,
                longitude: 149.080370,
            },
            params: [
                {
                    key: "travelmode",
                    value: "walking"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ]
        }

        getDirections(data)
    }


    const interpolations = state.locations.map((marker, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            ((index + 1) * CARD_WIDTH),
        ];

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: "clamp"
        });

        return { scale };
    });
    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;

        let x = (markerID * CARD_WIDTH) + (markerID * 20);
        if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET;
        }

        _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
    }

    const _map = React.useRef(null);
    const _scrollView = React.useRef(null);


    if (isLive) {
        return(
        <MapLive/>
        )
     }
    if (!isLive) {
        return (

            <View style={styles.container}>
                <MapView
                    ref={_map}
                    initialRegion={state.region}
                    style={styles.container}
                    provider={PROVIDER_GOOGLE}

                >
                    {state.locations.map((marker, index) => {
                        const scaleStyle = {
                            transform: [
                                {
                                    scale: interpolations[index].scale,
                                },
                            ],
                        };
                        return (
                            <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
                                <Animated.View style={[styles.markerWrap]}>
                                    <Animated.Image
                                        source={require('./assets/map_marker.png')}
                                        style={[styles.marker, scaleStyle]}
                                        resizeMode="cover"
                                    />
                                </Animated.View>
                            </MapView.Marker>
                        );
                    })}
                </MapView>

                <View style={styles.searchBox}>
                    <TextInput
                        placeholder="Search here"  //searchBox
                        placeholderTextColor="#000"
                        autoCapitalize="none"
                        style={{ flex: 1, padding: 0 }}
                    />
                    <Ionicons name="ios-search" size={20} />
                </View>

                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                    pagingEnabled
                    snapToInterval={CARD_WIDTH + 20}
                    snapToAlignment="center"
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
                    {state.locations.map((marker, index) => (
                        <View style={styles.card} key={index}>
                            <Image
                                source={marker.image}
                                style={styles.cardImage}
                                resizeMode="cover"
                            />
                            <View style={styles.textContent}>

                                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                                <Text numberOfLines={6} style={styles.cardDescription}>{marker.description}</Text>

                                <View style={styles.button}>
                                    <TouchableOpacity
                                        onPress={changeLive(this)} //button 
                                        style={[styles.signIn, {
                                            borderColor: '#FF6347',
                                            borderWidth: 2
                                        }]}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#FF6347'
                                        }]}>Start Walk </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </Animated.ScrollView>
            </View>
        );
        
    }
    function changeLive(comp) { isLive = true;console.log(isLive)}
};

     
export default Map;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height:"100%",
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
});