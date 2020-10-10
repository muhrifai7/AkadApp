import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { COLORS } from "../../contants"

type PropsJadwalUjian = {}

const JadwalUjian = () => {
    const [state, setState] = useState();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <Text>JadwalUjian Screen</Text>
        </View>
    );
}

export default JadwalUjian;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
})