import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type PropsTranskip = {
    navigation?: any
}

const Transkip: React.FC<PropsTranskip> = ({ navigation }) => {
    const [state, setState] = useState();

    return (
        <View>
            <Text>Transkip Screen</Text>
        </View>
    );
}

export default Transkip;

const styles = StyleSheet.create({

})