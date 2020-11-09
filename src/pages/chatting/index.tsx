import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

type PropsChatting = {
    navigation?: any
}

const Chatting = ({ navigation }: PropsChatting) => {
    const [state, setState] = useState();
    const list = [
        {
            id: 1,
            name: 'Amy Farha',
            subtitle: 'Vice President'
        },
        {
            id: 2,
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        }
    ]

    const keyExtractor = (item: object, index: number) => index.toString();
    const renderItem = ({ item }: any) => (
        <ListItem bottomDivider onPress={() => navigation.navigate("Chat", {
            id: item.id,
            name: item.name,
        })} >

            <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }} />
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />

        </ListItem>
    )
    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={renderItem}
        />
    )
}

export default Chatting;

const styles = StyleSheet.create({

})