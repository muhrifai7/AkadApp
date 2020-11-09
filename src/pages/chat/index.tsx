import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from "../../components/chat/HeaderChat"
import ContentChat from "../../components/chat/Content"
type PropsChat = {}

const Chat = ({ route }: any) => {
    const [state, setState] = useState();

    return (
        <View style={styles.container}>
            <Header user={route.params} />
            <ContentChat />
        </View>
    );
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})