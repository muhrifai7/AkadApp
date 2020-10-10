import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Feather"

type PropsInfoUjian = {
    navigation?: any
}

const InfoUjian: React.FC<PropsInfoUjian> = ({ navigation }) => {

    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Icon style={{ paddingLeft: 10 }} name="arrow-left" size={26} color="black" />
            </TouchableOpacity>

        ),
    });
    const [state, setState] = useState();

    return (
        <View>
            <Text>InfoUjian Screen</Text>
        </View>
    );
}

export default InfoUjian;

const styles = StyleSheet.create({

})