import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type PropsInfoUjian = {
    navigation?: any
}

const InfoUjian: React.FC<PropsInfoUjian> = ({ navigation }) => {
    const [state, setState] = useState();

    return (
        <View>
            <Text>InfoUjian Screen</Text>
        </View>
    );
}

export default InfoUjian;

const styles = StyleSheet.create({

})