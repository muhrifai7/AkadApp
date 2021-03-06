import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const Message = ({ item }: any) => (
    <View style={[
        styles.message, item.incoming &&
        styles.incomingMessage
    ]}>
        <Text> {item.message}</Text>
    </View>
)

const styles = StyleSheet.create({
    message: {
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'flex-start',

    },
    incomingMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#E1FFC7'
    }
})
export default Message;