import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

import RekapSppTable from "../../components/dataTable/rekapSppTable"
import { COLORS } from "../../contants"
import { getKrs, deleteKrs } from "../../redux/ducks/action"

type PropsRekapSpp = {
    navigation?: any
}
interface ICard {
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
    company: object

}

const RekapSpp = ({ navigation }: PropsRekapSpp) => {
    const dispatch = useDispatch();
    const [data, setData] = useState<ICard[]>([]);
    const [refresh, setRefreshing] = useState<boolean>(false)
    const krs = useSelector((state: any) => state.krsStore, shallowEqual);
    useEffect(() => {
        (() => {
            dispatch(getKrs());
            setData(krs.data);
        })()
    }, [data])

    const handleDelete = async (id: number) => {
        await dispatch(deleteKrs(id))
        setData(krs.data);
        showMessage({
            message: "Data berhasil di hapus",
            type: "danger",
            duration: 500
        });
    }

    const handleRefresh = () => {
        setRefreshing(true);
        dispatch(getKrs());
        setData(krs.data);
        setRefreshing(false);

    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <RekapSppTable payloads={data} handleDelete={(id) => handleDelete(id)} refresh={refresh} handleRefresh={handleRefresh} />
            <FlashMessage position="top" />
        </View>
    );
}

export default RekapSpp;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
})