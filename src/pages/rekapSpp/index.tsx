import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';


import RekapSppTable from "../../components/dataTable/rekapSppTable"
import { COLORS } from "../../contants"
type PropsRekapSpp = {
    navigation?: any
}

const data = [{ "name": "John", "code": "213213214" }, { "name": "John", "code": "213213214" }, { "name": "John", "code": "213213214" }]

const RekapSpp = ({ navigation }: PropsRekapSpp) => {
    const [state, setState] = useState();
    console.log(typeof (navigation))
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <RekapSppTable payloads={data} />
        </View>
    );
}

export default RekapSpp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        marginHorizontal: 5
    }
})