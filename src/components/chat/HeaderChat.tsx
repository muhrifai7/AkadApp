import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Feather"

import Gap from "../../components/gap"
import { COLORS, FONTS, SIZES } from "../../contants"
type PropsHeader = {
    user: UserParams
}
interface UserParams {
    id: number,
    name: string
}

const Header = ({ user }: PropsHeader) => {
    const { name } = user;
    const [state, setState] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.wraper}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.wraperIcon}>
                    <TouchableOpacity>
                        <Icon name="phone" size={26} color="white" />
                    </TouchableOpacity>
                    <Gap width={17} />
                    <TouchableOpacity>
                        <Icon name="video" size={26} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        paddingTop: 13,
    },
    wraper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: SIZES.width * 0.07,
        marginBottom: 30
    },
    name: {
        color: 'white',
        fontSize: 17
    },
    wraperIcon: {
        flexDirection: 'row',
    }
})