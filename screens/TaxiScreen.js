import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Taxi from '../components/Taxi';
import NavigateCard from '../components/NavigateCard';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptionsCard  from '../components/RideOptionsCard';
import NavFavourites from '../components/NavFavourites';
import { Image, TouchableOpacity} from 'react-native';
const TaxiScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topHalf} />
      <Taxi />
      <View style={styles.bottomHalf} />
      <Stack.Navigator>
        <Stack.Screen 
        name="NavigateCard"
        component={NavigateCard}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="RideOptionsCard"
        component={RideOptionsCard}
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
        {/* <NavFavourites />  */}
        <View style={styles.choiceContainer}>
          <TouchableOpacity>
          <Text>prix:6100 frcs</Text>
          <Image source={require('../télécharger.jpg')} style={{ width: 100, height: 60, marginLeft: 50 , marginBottom: 35 }} />
            
          </TouchableOpacity>
           
          </View>
        
     
          <Text>prix:5900 frcs</Text>
          <View style={styles.choiceContainer}>
          <TouchableOpacity>
          <Image source={require('../th.jpg')} style={{ width: 100, height: 50, marginLeft: 50 , marginBottom: 30}} />
           
          </TouchableOpacity> 
          </View>
          <View style={styles.choiceContainer}>
          <Text>prix:6900 frcs</Text>
          <TouchableOpacity>
          <Image source={require('../nn.jpg')} style={{ width: 100, height: 50, marginLeft: 50 , marginBottom: 20}} /> 
          </TouchableOpacity> 
          </View>
    </View>
  );
};
export default TaxiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  topHalf: {
    flex: 1/100,
    height: 40,
  },
  bottomHalf: {
    flex: 1/50,
  },
});
