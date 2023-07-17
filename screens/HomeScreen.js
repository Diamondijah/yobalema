import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation()
  const handleContinue = () => {
    navigation.navigate('Choose');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../verjaune.png')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
      <View style={styles.header}>
          <Image
            source={require('../logo.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Bienvenue sur</Text>
        </View>
        <Text style={styles.additionalText}>Yobalema !</Text>
        {/* Contenu supplémentaire de la page Home */}
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continuer</Text>
        </TouchableOpacity>
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 2/3,
    marginRight: -200,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logo: {
    width: 90, 
    height: 90,
    marginRight: -40,
    marginTop: -400,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 480,
    marginRight: 370,
    fontFamily: 'Snell Roundhand',
  },
  button: {
    backgroundColor: 'green',
    width: '50%',
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    alignSelf: 'end',
    marginTop: 100,
    marginLeft: 50,

  },
  additionalText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    alignSelf: 'center',
    marginTop: -35,
    marginLeft: 40,
    color: 'green',
    fontFamily: 'Snell Roundhand',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default HomeScreen;

