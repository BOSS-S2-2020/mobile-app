import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker , Callout} from 'react-native-maps';


class Map extends React.Component {
   
    render() {
        return (

            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: -35.35000,
                    longitude: 149.16670,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035,
                }}
            >
                <Marker
                    coordinate={{ latitude: -35.267758, longitude: 149.079150, }}
                    title="Aranda Bushlland Nuture Reserve"
                    description="Aranda Bushland is an important part of the wooded area which extends from Black Mountain to the Molonglo and Murrumbidgee river corridors."
                    image={require('../assets/park1.jpg')}

                >
                    <Marker
                        coordinate={{
                            latitude: - 35.269278,
                            longitude: 149.163692,
                        }}
                        title="Mount Ainslie Nature Reserve"
                        description="Mount Ainslie Nature Reserve (637 hectares) and the adjoining Mount Majura Nature Reserve form a significant ridge in north-east Canberra."
                        image={require('../assets/park2.jpg')}
                    >
                        <Callout tooltip>
                            <View>
                                <View style={styles.bubble}>
                                    <Text style={styles.name}>Favourite Restaurant</Text>

                                    <Image
                                        style={styles.image}
                                        source={require('../assets/park3.jpg')}
                                    />
                                </View>
                                <View style={styles.arrowBorder} />
                                <View style={styles.arrow} />
                            </View>
                        </Callout>
                    </Marker>
                </Marker>
            </MapView>

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
});

export default Map;
