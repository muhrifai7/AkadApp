import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

type PropsCompose = {
    submit?: () => void
}

const Compose = ({ submit }: any) => {
    const [state, setState] = useState({ text: "" });

    return (
        <View style={styles.compose}>
            <TextInput
                style={styles.composeText}
                //value diatur berdasarkan nilai dari state text
                value={state.text}
                //ketika text berubah maka akan melakukan set text
                onChangeText={(text) => setState({ text })}
                //Ketika user memasukkan text dan meng-klik return pada phone keyboard maka akan disubmit.
                onSubmitEditing={(event) => submit()}
                editable={true}
                maxLength={40}
            />
            <Button

                //ketika tombol ditekan maka akan memanggil method submit
                onPress={submit}
                title="Send"
            />
        </View>
    );
}

export default Compose;
const styles = StyleSheet.create({
    composeText: {
        width: '80%',
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 15
    },
    compose: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    }
});