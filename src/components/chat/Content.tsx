import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Keyboard } from 'react-native';
import Message from '../../components/chat/Message'
import Compose from '../../components/chat/Compose'

interface messageItem {
    message: string;
    incoming: boolean
}

interface serviceItems extends Array<messageItem> { }

const ContentChat = () => {
    const [state, setState] = useState<serviceItems>([{ message: "hallo", incoming: true }, { message: "test", incoming: false }]);
    const [message, setMessage] = useState({ text: '' });

    const postMessage = (message: any) => {
        // if (Boolean(message)) {
        //     pushData('messages', {
        //         incoming: false,
        //         message
        //     })
        // }
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.container}
                data={state}
                renderItem={Message}
                keyExtractor={(item, index) => (`message-${index}`)}
            />
            <Compose submit={postMessage} />
        </View>
    );
}

export default ContentChat;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: -20,
        borderTopRightRadius: 26,
        borderTopLeftRadius: 26,
        paddingHorizontal: 20,
        paddingTop: 20
    }
})