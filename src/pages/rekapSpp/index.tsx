import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';


import RekapSppTable from "../../components/dataTable/rekapSppTable"
import { COLORS } from "../../contants"
type PropsRekapSpp = {}

const RekapSpp = ({ navigation }: any) => {
    const [state, setState] = useState();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />

            <RekapSppTable />
        </View>
    );
}

export default RekapSpp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 5
    }
})