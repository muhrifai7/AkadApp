import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ripple } from 'material-bread';

import Table from "../../components/dataTable"
import { COLORS, FONTS, SIZES } from "../../contants"
import { Searchbar } from 'react-native-paper';

type PropsPengisianKrs = {}

const PengisianKrs = ({ navigation }: any) => {
    console.log(navigation, 'okeke')
    const [state, setState] = useState();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={COLORS.primary} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={styles.titleText} >Daftar KRS Mahasiswa</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("RootPengisianKrs", {
                                screen: "Krs"
                            })
                        }}
                    >
                        <View style={styles.cardContainer}>
                            <View style={styles.header}>
                                <Text style={styles.textHeader}>Tahun ajar</Text>
                                <Text style={styles.textHeader}>Semester</Text><Text style={styles.textHeader}>Jurusan</Text><Text style={styles.textHeader}>Nama Mahasiswa/i</Text>
                            </View>
                            <View style={styles.header}><Text style={styles.detail}>2019/2020-Ganjil</Text><Text style={styles.detail}>1</Text><Text style={styles.detail}>DIII KEPERAWATAN</Text><Text style={styles.detail}>Achika Dwi Arofah</Text></View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ripple
                            rippleColor="#0984e3" style={styles.cardContainer}>

                            <View style={styles.header}>
                                <Text style={styles.textHeader}>Tahun ajar</Text>
                                <Text style={styles.textHeader}>Semester</Text><Text style={styles.textHeader}>Jurusan</Text><Text style={styles.textHeader}>Nama Mahasiswa/i</Text>
                            </View>
                            <View style={styles.header}><Text style={styles.detail}>2019/2020-Ganjil</Text><Text style={styles.detail}>1</Text><Text style={styles.detail}>DIII KEPERAWATAN</Text><Text style={styles.detail}>Achika Dwi Arofah</Text></View>

                        </Ripple>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ripple
                            rippleColor="#0984e3" style={styles.cardContainer}>

                            <View style={styles.header}>
                                <Text style={styles.textHeader}>Tahun ajar</Text>
                                <Text style={styles.textHeader}>Semester</Text><Text style={styles.textHeader}>Jurusan</Text><Text style={styles.textHeader}>Nama Mahasiswa/i</Text>
                            </View>
                            <View style={styles.header}><Text style={styles.detail}>2019/2020-Ganjil</Text><Text style={styles.detail}>1</Text><Text style={styles.detail}>DIII KEPERAWATAN</Text><Text style={styles.detail}>Achika Dwi Arofah</Text></View>

                        </Ripple>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* <Table /> */}

        </SafeAreaView>
    );
}

export default PengisianKrs;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20
    },
    title: {
        paddingVertical: 17,
    },
    titleText: {
        color: COLORS.textColor,
        fontSize: 16,
        fontFamily: FONTS.family
    },
    searchBar: {
        width: 200,
    },
    cardContainer: {
        display: 'flex',
        // flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
        flexWrap: 'wrap',
        overflow: 'hidden',
        // height: SIZES.height * 0.2,
        backgroundColor: "#dfe6e9",
        borderRadius: 5,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    header: {
        flex: 1,
        padding: 5
    },
    textHeader: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    detail: {
        color: COLORS.textColor
    }

})