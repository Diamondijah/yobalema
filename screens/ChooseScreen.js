import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 import {GOOGLE_MAPS_APIKEY } from "@env";
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';

const ChooseScreen = ({ navigation }) => {
  
  const dispatch = useDispatch();
  
  
    const [selectedPlace, setSelectedPlace] = useState(null);

  const handleTaxiSelection = () => {
    navigation.navigate('Taxi');
  };

  const handleAminaSelection = () => {
    navigation.navigate('Chatbot');
  };
 
  const handlePlaceSelection = (data, details = null) => {
    dispatch(
      setOrigin({
        location: {
          lat: details.geometry.location.lat,
          lng: details.geometry.location.lng,
        },
        description: data.description,
      })
    );
    dispatch(setDestination(null));
  };


  return (


<View style={styles.container}>
<SafeAreaView style={{ flex: 1 }}>
        
 <GooglePlacesAutocomplete
    placeholder='ou allez vous?'
    styles={{
      container: {
        flex: 0,
        width: 150,
        height: 50,
      },
      textInput: {
        fontSize: 18,
       
      },
    }}
    fetchDetails={true}
    returnKeyType={"search"}
    enablePoweredByContainer={false}
    minLength={2}
    query={{
      key: GOOGLE_MAPS_APIKEY,
      language: "en",
    }}
    nearbyPlacesAPI="GooglePlacesSearch"
    debounce={400}
    onPress={(data, details = null) => {
      setSelectedPlace(data);
      dispatch(setOrigin({
       location: details.geometry.location,
       description: data.description,
           }))
     dispatch(setDestination(null));
    }}
    /> 

  
      <ImageBackground style={styles.backgroundImage}>
        <TouchableOpacity onPress={handleTaxiSelection}>
          <View style={styles.choiceContainer}>
            <Image source={require('../voiture.jpg')} style={styles.icon} />
            <Text style={styles.choiceButtonText}>Taxi</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>

    <ImageBackground style={styles.backgroundImage}>
    <TouchableOpacity onPress={handleTaxiSelection}>
    <View 
    style={{
      alignItems: 'center',
      paddingVertical: 5,
      flexGrow: 1,
    }}
    >
      <Image 
      source={require('../terbi.png')} 
      style={styles.icon}
      />  
        <Text style={styles.choiceButtonText}>Terbi</Text>
        
    </View>
    </TouchableOpacity>
    </ImageBackground>
    
    <ImageBackground
style={styles.backgroundImage}>
    <TouchableOpacity >
    <View 
    style={{
      alignItems: 'center',
      paddingVertical: 5,
      flexGrow: 1,
    }}
    
    >
      <Image 
      source={require('../thiak.jpg')} 
      style={styles.icon}
      />  
        <Text style={styles.choiceButtonText}>livraison</Text>
        
    </View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground
style={styles.backgroundImage}>
    <TouchableOpacity >
    <View 
    style={{
      alignItems: 'center',
      paddingVertical: 5,
      flexGrow: 1,
    }}
    >
      <Image 
      source={require('../bus.jpg')} 
      style={styles.icon}
      />  
        <Text style={styles.choiceButtonText}>Bus</Text>
        
    </View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground
style={styles.backgroundImage}>
    <TouchableOpacity >
    <View 
    style={{
      alignItems: 'center',
      paddingVertical: 5,
      flexGrow: 1,
    }}
    >
      <Image 
      source={require('../jakarta.jpg')} 
      style={styles.icon}
      />  
        <Text style={styles.choiceButtonText}>Jakarta</Text>
        
    </View>
    </TouchableOpacity>
    </ImageBackground>
    <ImageBackground style={styles.backgroundImage}>
        <TouchableOpacity onPress={handleAminaSelection}>
          <View style={styles.choiceContainer}>
            <Image source={require('../verjaune.png')} style={styles.icon} />
            <Text style={styles.choiceButtonText}>Amina</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
      </SafeAreaView>

   </View>
   
);
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 2,
    resizeMode: 'cover',
    flex: 1,
    backgroundColor: 'white',
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#b0f2b6',
  },
  question: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    fontFamily: 'Snell Roundhand',
  },
  
  choiceButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 50,
    marginLeft:10,
  },
  icon: {
    width: 90,
    height: 60,
    marginRight: 50,
  }
 
});


export default ChooseScreen;
 