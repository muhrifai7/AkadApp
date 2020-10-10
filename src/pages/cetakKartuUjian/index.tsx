import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import { COLORS } from "../../contants"

type PropsCetakKartuUjian = {}

const CetakKartuUjian = () => {
    const [state, setState] = useState();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <Text>CetakKartuUjian Screen</Text>
        </View>
    );
}

export default CetakKartuUjian;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
})