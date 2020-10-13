import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';


import Table from "../table"
import { COLORS } from "../../contants"
import { Searchbar } from 'react-native-paper';

type PropsPengisianKrs = {}

const PengisianKrs = ({ navigation }: any) => {
    const [state, setState] = useState();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={COLORS.primary} />
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText} >Daftar KRS Mahasiswa</Text>
                </View>
                <View style={styles.searchBar}>
                    <Searchbar

                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />

                </View>
            </View>
            <View>
            </View>
            <Table />

        </SafeAreaView>
    );
}

export default PengisianKrs;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: "center"
    },
    title: {
        paddingVertical: 5,
    },
    titleText: {
        color: COLORS.textColor,
        fontSize: 16
    },
    searchBar: {
        width: 200,
    }
})