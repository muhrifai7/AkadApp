import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Table from "../../components/dataTable"
import { COLORS } from "../../contants"

type PropsDetailKrs = {}

const DetailKrs = ({ navigation }: any) => {
    const [state, setState] = useState();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />

            <Table />
        </View>
    );
}

export default DetailKrs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 5
    }
})