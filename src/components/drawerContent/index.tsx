import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    List,
} from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-community/async-storage"

import { COLORS } from '../../contants';

const DrawerContent = (props: any) => {
    const [dropValue, setDropValue] = useState(false);
    const [dropKasir, setDropKasir] = useState(false);
    const [dropLaporan, setDroplaporan] = useState(false);
    const dropMenu = () => {
        setDropValue(!dropValue);
    };
    const dropMenuKasir = () => {
        setDropKasir(!dropKasir);
    };
    const dropMenuLaporan = () => {
        setDroplaporan(!dropLaporan);
    };



    const signOut = async () => {
        let token = await AsyncStorage.getItem("mahasiswa");
        if (token) {
            AsyncStorage.removeItem("mahasiswa")

        }
        console.log(token, 'tokeeen')
        props.navigation.navigate('Login');
    };

    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity
                                style={{ display: 'flex', flexDirection: 'row' }}
                                onPress={() => {
                                    props.navigation.navigate('RootProfile', {
                                        screen: "Profile"
                                    });
                                }}>
                                <Avatar.Image
                                    source={{
                                        uri:
                                            'https://api.adorable.io/avatars/50/abott@adorable.png',
                                    }}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>Super Adimin</Title>
                                    <Caption style={styles.caption}>@admin</Caption>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <List.Section>

                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate("RootDashBoard", { screen: "Dashboard" })
                                }}>
                                <List.Item
                                    title="Dashboard"
                                    left={() => (
                                        <Icon name="home-outline" color="black" size={24} />
                                    )}
                                />
                            </TouchableOpacity>
                            <List.Accordion
                                title="Kemahasiswaan"
                                left={(props) => (
                                    <Icon name="book-multiple-outline" color="black" size={24} />
                                )}>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate("RootPengisianKrs", { screen: "PengisianKrs" })
                                }}>
                                    <List.Item title="Pengisisan Krs" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate("RootTranskip", { screen: "Transkip" })
                                }}>
                                    <List.Item title="Transkip" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate("RootInfoUjian", {
                                        screen: "TopTabsUjian"
                                    })
                                }}>
                                    <List.Item title="Info Kuliah Ujian" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate("RootRekapSpp", {
                                        screen: "RekapSpp"
                                    })
                                }}>
                                    <List.Item title="Rekap Spp" />
                                </TouchableOpacity>
                            </List.Accordion>

                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('RootEbook', {
                                        screen: 'Ebook',
                                    });
                                }}>
                                <List.Item
                                    title="E-book"
                                    left={() => (
                                        <Icon name="account-box-outline" color="black" size={24} />
                                    )}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('RootToko', {
                                        screen: 'Toko',
                                    });
                                }}>
                                <List.Item
                                    title="Folder Aside"
                                    left={() => (
                                        <Icon name="folder" color="black" size={24} />
                                    )}
                                />
                            </TouchableOpacity>
                        </List.Section>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <List.Section>
                    <TouchableOpacity
                        onPress={signOut}>
                        <List.Item
                            title="Sing Out"
                            left={() => <Icon name="exit-to-app" color="black" size={24} />}
                        />
                    </TouchableOpacity>
                </List.Section>

            </Drawer.Section>
        </SafeAreaView>
    );
};

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    master: {
        marginLeft: 50,
        // backgroundColor: 'red',
    },
    master1: {
        fontWeight: 'bold',
        // backgroundColor: 'red',
    },
});
