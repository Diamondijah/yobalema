import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import {FlatList, Text, TouchableOpacity, View } from 'react-native';


const data = [
    {
        id:"1",
        title: "Taxi",
        screen: "Mapscreen",
    },
];
const NavOptions = () => {
    const navigation = useNavigation();
    return (
      <View>
       <FlatList 
       data={data}
       horizontal
       renderItem={({ item}) => (
        <TouchableOpacity>
            <Text>{item.title}</Text>
        </TouchableOpacity>
       )}
       />
      </View>
    )
  }


  export default NavOptions;
  
