import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type PropsProfile = {
    navigation?: any
}

const Profile: React.FC<PropsProfile> = ({ navigation }) => {
    const [state, setState] = useState();

    return (
        <View>
            <Text>Profile Screen</Text>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({

})