import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY } from "@env";
import Constants from 'expo-constants';

const Taxi = () => {
 const origin = useSelector(selectOrigin);
  return (
    <MapView
    style={ tw`flex-1 h-full w-full`}
    mapType='mutedStandard'
      initialRegion={{
        latitude: 14.716677,
        longitude: -17.467686,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
       <Marker
          coordinate={{
            latitude : 14.695958,
            longitude : -17.463659
          }}
        />
        <Marker
          coordinate={{
            latitude : 14.7589446,
            longitude : -17.3937536,
          }}
        />
          {/* <MapViewDirections
    origin={{ latitude: 14.695958, longitude: -17.463659 }}
    destination={{ latitude: 14.7589446, longitude: -17.3937536 }}
    apikey={"AIzaSyB4Sk18BHnAGGnyX0Xo5ve0S9DpX_ee-48"}
    strokeWidth={3}
    strokeColor="blue"
    mode="driving"
  /> */}

    </MapView>


     
  );
};

export default Taxi;
const styles = StyleSheet.create({}); 
