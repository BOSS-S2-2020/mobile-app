import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, Animated, Dimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import { locations } from './resources/MapData'

//class Map extends React.Component {
   
//    render() {
//        return (
const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = 220;

const Map = () => {
  

    const initialMapState = {
        locations,
        region: {
            latitude: -35.35000,
            longitude: 149.16670,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
        },

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
                        <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
                        
                    </View>
                </View>
            ))}
        </Animated.ScrollView>
    </View>
);
    
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
});