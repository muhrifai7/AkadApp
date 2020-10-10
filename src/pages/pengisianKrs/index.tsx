import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';

import { COLORS } from "../../contants"
type PropsPengisianKrs = {}

const PengisianKrs = ({ navigation }: any) => {
    const [state, setState] = useState();

    return (
        <View>
            <StatusBar backgroundColor={COLORS.primary} />
            <TouchableOpacity onPress={() => {
                navigation.navigate("DetailKrs")
            }}>
                <Text>PengisianKrs Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PengisianKrs;

const styles = StyleSheet.create({

})