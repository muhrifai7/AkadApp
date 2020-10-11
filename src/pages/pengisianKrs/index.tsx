import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';


import Table from "../table"
import { COLORS } from "../../contants"
type PropsPengisianKrs = {}

const PengisianKrs = ({ navigation }: any) => {
    const [state, setState] = useState();

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={COLORS.primary} />
            <TouchableOpacity onPress={() => {
                navigation.navigate("DetailKrs")
            }}>
                <Text>PengisianKrs Screen</Text>
            </TouchableOpacity>
            <Table />

        </View>
    );
}

export default PengisianKrs;

const styles = StyleSheet.create({

})