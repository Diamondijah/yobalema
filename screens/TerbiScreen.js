import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Taxi from '../components/Taxi';
import NavigateCard from '../components/NavigateCard';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptionsCard  from '../components/RideOptionsCard';
import { Image, TouchableOpacity} from 'react-native';
const TerbiScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topHalf} />

        
    </View>
  );
};
export default TerbiScreen;

const styles = StyleSheet.create({
 
});
