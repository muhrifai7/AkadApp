import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type PropsGap = {
    width?: number,
    height?: number
}

const Gap = ({ width, height }: PropsGap) => {
    const [state, setState] = useState();

    return (
        <View style={{ width: width, height: height }}>
        </View>
    );
}

export default Gap;

const styles = StyleSheet.create({

})