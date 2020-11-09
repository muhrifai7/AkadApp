import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import RekapSppTable from "../../components/dataTable/rekapSppTable"
import { COLORS } from "../../contants"
import { getKrs, deleteKrs } from "../../redux/ducks/action"

type PropsRekapSpp = {
    navigation?: any
}
interface ICard {
    id: number;
    userId: number;
    title: string;
    body: string

}

const RekapSpp = ({ navigation }: PropsRekapSpp) => {
    const dispatch = useDispatch();
    const [data, setData] = useState<ICard[]>([]);

    const krs = useSelector((state: any) => state.krsStore);
    useEffect(() => {
        (() => {
            console.log(krs.data, 'datatata');
            dispatch(getKrs());
            setData(krs.data);
        })()
    }, [data])

    const handleDelete = async (id: number) => {

        await dispatch(deleteKrs(id))
        setData(krs.data);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <RekapSppTable payloads={data} handleDelete={(id) => handleDelete(id)} />
        </View>
    );
}

export default RekapSpp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5
    }
})