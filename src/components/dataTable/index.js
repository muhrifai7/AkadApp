import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {
  DataTable,
  DataTableCell,
  DataTableRow,
  DataTablePagination,
  IconButton,
} from 'material-bread';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS, FONTS} from '../../contants';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      perPage: 10,
    };
  }
  render() {
    const data = [
      {
        tahun: '2019/2020-Ganjil',
        kode: 'WAT102B',
        mataKuliah: 'D III mataKuliah Keperawatan.0',
        sks: 'Achika Dwi Arofah4',
        dosen: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
      },
      {
        tahun: '2019/2020-Ganjil',
        kode: 'WAT102B',
        mataKuliah: 'D III mataKuliah Keperawatan.0',
        sks: 'Achika Dwi Arofah7',
        dosen: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
      },
      {
        tahun: '2019/2020-Ganjil',
        kode: 'WAT102B',
        mataKuliah: 'D III mataKuliah Keperawatan.4',
        sks: 'Achika Dwi Arofah0',
        dosen: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
      },
      {
        tahun: '2019/2020-Ganjil',
        kode: 'WAT102B',
        mataKuliah: 'D III mataKuliah Keperawatan.0',
        sks: 'Achika Dwi Arofah2',
        dosen: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
      },
      {
        tahun: '2019/2020-Ganjil',
        kode: 'WAT102B',
        mataKuliah: 'D III mataKuliah Keperawatan5',
        sks: 'Achika Dwi Arofah0',
        dosen: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
      },
      {
        tahun: '2019/2020-Ganjil',
        kode: 'WAT102B',
        mataKuliah: 'D III mataKuliah Keperawatan',
        sks: 'Achika Dwi Arofah',
        dosen: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
      },
    ];

    const createTwoButtonAlert = () =>
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );

    return (
      <View style={{marginHorizontal: 6}}>
        <DataTable>
          <DataTableRow>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View style={styles.headerNumber}>
                <Text style={styles.headerText}>No</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Kode</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Mata Kuliah</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Sks</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Dosen</Text>
              </View>
            </View>
          </DataTableRow>
          {data
            .slice(
              this.state.page * this.state.perPage,
              this.state.page * this.state.perPage + this.state.perPage,
            )
            .map((row, index) => (
              <DataTableRow key={index}>
                <View
                  style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 15,
                    justifyContent: 'center',
                  }}>
                  <Text>{index + 1}</Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 5,
                    flexWrap: 'wrap',
                    width: 200,
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}>
                  <Text>{row.kode}</Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 5,
                    flexWrap: 'wrap',
                    width: 200,
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}>
                  <Text>{row.mataKuliah}</Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 5,
                    flexWrap: 'wrap',
                    width: 200,
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}>
                  <Text>{row.sks}</Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 5,
                    flexWrap: 'wrap',
                    width: 200,
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}>
                  <Text>{row.dosen}</Text>
                </View>
                {/* <View
                  style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 5,
                    flexWrap: 'wrap',
                    width: 200,
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}>
                  <Text>{row.sks}</Text>
                </View>
                <TouchableOpacity
                  onPress={createTwoButtonAlert}
                  style={{
                    marginHorizontal: 5,
                    paddingHorizontal: 5,
                    flexWrap: 'wrap',
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}>
                  <Icon sks="plus-square" color="green" size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={createTwoButtonAlert}
                  style={{
                    marginHorizontal: 5,
                    paddingHorizontal: 5,
                    flexWrap: 'wrap',
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}>
                  <Icon name="edit" color="blue" size={27} />
                </TouchableOpacity> */}
              </DataTableRow>
            ))}

          <DataTablePagination
            page={this.state.page}
            numberOfPages={data.length / this.state.perPage}
            numberOfRows={data.length}
            perPage={this.state.perPage}
            onChangePage={(page) => this.setState({page: page})}
            onChangeRowsPerPage={(perPage) => this.setState({perPage: perPage})}
            // possibleNumberPerPage={[2, 3, 4, 5, 6]}
          />
        </DataTable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerNumber: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  header: {
    marginHorizontal: 10,
    paddingHorizontal: 5,
    width: 200,
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: FONTS.family,
    fontWeight: 'bold',
  },
  row: {},
});