// LoginScreen.js
import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Logique de connexion avec nom d'utilisateur et mot de passe
    console.log(`Connexion avec : ${username} - ${password}`);
    if (username === 'utilisateur' && password === 'motdepasse') {
        // Rediriger vers le menu
        navigation.navigate('Home');
      }
    };

  return (
    
    <ImageBackground
      source={require('../background.png')}
      style={styles.backgroundImage}
      resizeMode='contain'
      
    >
      <View style={styles.container}>
      <View style={styles.upperSection}></View>
      <View style={styles.lowerSection}></View>
        <Image
          source={require('../logo.png')}
          style={styles.logo}
        />
        <Text style={styles.appName}>Yobalema</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};
 
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'white',
   
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
   
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Snell Roundhand',
    marginBottom: 350,
    color: 'green',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    width: '80%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
