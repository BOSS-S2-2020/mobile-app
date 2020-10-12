import React from 'react'
import {StyleSheet} from 'react-native';
import Styles from './Styles'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class Map extends React.Component {
    state = {
        coordinates: [
            { name: 'Park1', latitude: -35.267758, longitude: 149.079150 },
            { name: 'Park2', latitude: -35.269278, longitude: 149.163692 },
            { name: 'Park1', latitude: -35.267758, longitude: 149.119234 }
        ]
    }

    render() {
        return (
            
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                region={{
                    latitude: -35.35000,
                    longitude: 149.16670,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035
                }}>
          
            <Marker
                coordinate={{ latitude: -35.267758, longitude: 149.079150 }}
                title={'Aranda Bushlland Nuture Reserve'}>
            </Marker>

            </MapView >
       
                
        );      
    }
};


const styles = StyleSheet.create({
 
    mapStyle: {
        height: '100%'
    },
}); 
export default Map;
