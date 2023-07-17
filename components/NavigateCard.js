import React from "react";
import { StyleSheet , Text, View} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { TouchableOpacity } from "react-native-gesture-handler";

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw `bg-white flex-1`}>
            <Text style={tw `text-center`}>Bonjour Sonia</Text>
            <View style={tw `border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete placeholder="ou allez vous?"
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    returnKeyType={"Search"}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    
                    />
                
                </View>
            </View>
        </SafeAreaView>
    );
};
export default NavigateCard;
const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
  textInput: {
    backgroundColor:"#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  TextInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },

});
