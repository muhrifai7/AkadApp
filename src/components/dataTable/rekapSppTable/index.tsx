import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux"
import { GestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/AntDesign"

import { COLORS } from "../../../contants"
import { deleteKrs } from "../../../redux/ducks/action"
interface PropsTable {
  payloads?: ICard[],
  handleDelete: (id: number) => void
}

interface ICard {
  id: number;
  userId: number;
  title: string;
  body: string
}

const Table = ({ payloads, handleDelete }: PropsTable) => {
  const [current, setCurrentIndex] = useState<null | number>(null);



  const ListItem = ({ data }: any) => {
    return (
      <View key={data.id} style={styles.container}>
        <View>
          <Text style={styles.list}>{data.title.slice(0, 28)}</Text>
        </View>
        <TouchableOpacity onPress={() => handleDelete(data.id)}>
          <Icon name="delete" size={25} color="red" />
        </TouchableOpacity>


      </View>
    )
  }

  return (
    <FlatList
      data={payloads}
      renderItem={({ item }) =>
        <ListItem data={item} />}
    />


  );
}

export default Table;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  list: {
    padding: 5,
    // fontWeight: "600",
    fontSize: 16
  }
})