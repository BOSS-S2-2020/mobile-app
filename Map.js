import React from 'react'
import { StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import { locations } from './resources/MapData';
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
                    {
                    locations.map(marker => (
                            <Marker
                                coordinate={{latitude: marker.latitude,longitude: marker.longitud}}
                                title={marker.title}
                                description={marker.description}
                                markerImage={marker.markerImage}
                            />
                            ))
                    }

           </MapView>
          
        );
    }
};


const styles = StyleSheet.create({
    map: {
        height: '100%'
    },
   

});

export default Map;
