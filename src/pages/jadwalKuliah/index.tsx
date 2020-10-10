import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { COLORS } from "../../contants"

type PropsJadwalKuliah = {}

const JadwalKuliah = () => {
    const [state, setState] = useState();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <Text>JadwalKuliah Screen</Text>
        </View>
    );
}

export default JadwalKuliah;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
})