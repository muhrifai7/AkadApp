import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type PropsEbook = {}

const Ebook = () => {
    const [state, setState] = useState();

    return (
        <View>
            <Text>Ebook Screen</Text>
        </View>
    );
}

export default Ebook;

const styles = StyleSheet.create({

})