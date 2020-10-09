import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type PropsDasboard = {
    navigation?: any
}

const Dasboard: React.FC<PropsDasboard> = ({ navigation }) => {
    const [state, setState] = useState();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Transkip")}>

                <Text>Dasboard Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Dasboard;

const styles = StyleSheet.create({

})