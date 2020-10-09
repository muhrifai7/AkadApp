import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type PropsPengisianKrs = {
    navigation?: any
}

const PengisianKrs: React.FC<PropsPengisianKrs> = ({ navigation }) => {
    const [state, setState] = useState();

    return (
        <View>
            <Text>PengisianKrs Screen</Text>
        </View>
    );
}

export default PengisianKrs;

const styles = StyleSheet.create({

})