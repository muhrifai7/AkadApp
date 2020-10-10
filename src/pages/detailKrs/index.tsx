import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { COLORS } from "../../contants"

type PropsDetailKrs = {}

const DetailKrs = () => {
    const [state, setState] = useState();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <Text>DetailKrs Screen</Text>
        </View>
    );
}

export default DetailKrs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
})