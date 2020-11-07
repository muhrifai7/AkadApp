import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"

import { COLORS } from "../../../contants"

interface PropsTable {
  payloads: ICard[]
}

interface ICard {
  name: string;
  code: string;
}

const Table = ({ payloads }: PropsTable) => {
  const [current, setCurrentIndex] = useState<null | number>(null);

  return (
    <View >
      {payloads.map((item, index) => (
        <View key={index} style={{
          ...styles.container, marginHorizontal: 10,
          paddingHorizontal: 10,
        }}>
          <View style={{
            ...styles.container, display: 'flex',
            flexDirection: 'row',
          }}>
            <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.code}>KEUS1213</Text>
            </View>
            <View style={styles.content}>
              <TouchableOpacity onPress={() => {
                setCurrentIndex(index)
              }}>
                <Icon name='down' size={20} color={'green'} />
              </TouchableOpacity>
            </View>
          </View>
          {current === index &&
            <View style={{
              ...styles.container, display: 'flex',
              flexDirection: 'row'
            }}>

              <View style={styles.detail}>
                <View style={styles.dropContainer}>
                  <Text>Tagihan</Text>
                  <Text>Keu23214214</Text>
                </View>
                <View>
                  <Text>Tagihan</Text>
                </View>

              </View>
              {/* <View style={styles.detail}>
                <Text>Keu23214214</Text>
                <Text>12 November 2020</Text>
                <Text>1. Praktikum 1.850.000
                </Text>
                <Text>2. Dana Kemahasiswaan 250.000
             </Text><Text>3. SPP 5.050.000
                Pembayaran Ke No.Rekening Bank:
1. Bank BTN 0019301300000868</Text>
              </View> */}

            </View>
          }

        </View>
      ))}
    </View>

  );
}

export default Table;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: 6,
    justifyContent: 'space-between',
    marginTop: 10,
    overflow: 'hidden'
  },
  content: {
    margin: 6
  },
  code: {
    fontSize: 13
  },
  name: {
    fontSize: 15
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  },
  detail: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
  },
  dropContainer: {
    backgroundColor: 'blue',
  }
})