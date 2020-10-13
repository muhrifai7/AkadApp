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
import {COLORS, FONTS} from '../../../contants';

export default class RekapSppTable extends React.Component {
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
        Tagihan: 'KEU0965Achika Dwi Arofah201901001',
        tglTag: '2020-09-04',
        keterangan: `1. Uang Kegiatan Mahasiswa (IKM) 150.000
2. Biaya Kuliah dan Praktek 8.950.000
3. Biaya Pengembangan sarana dan prasarana 1.500.000
Pembayaran Ke No.Rekening Bank:
1. BNI SYARIAH 0755578889`,
        jurusan: `DIII KEPERAWATAN
2020/2021-Ganjil III`,
        pembayaran: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
      },
      {
        Tagihan: 'KEU0965Achika Dwi Arofah201901001',
        tglTag: '2020-09-04',
        keterangan: `1. Uang Kegiatan Mahasiswa (IKM) 150.000
2. Biaya Kuliah dan Praktek 8.950.000
3. Biaya Pengembangan sarana dan prasarana 1.500.000
Pembayaran Ke No.Rekening Bank:
1. BNI SYARIAH 0755578889`,
        jurusan: `DIII KEPERAWATAN
2020/2021-Ganjil III`,
        pembayaran: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
        tagihan: 'Rp. 10.600.000 BELUM LUNAS',
      },
      {
        Tagihan: 'KEU0965Achika Dwi Arofah201901001',
        tglTag: '2020-09-04',
        keterangan: 'D III keterangan Keperawatan.4',
        jurusan: `DIII KEPERAWATAN
2020/2021-Ganjil III`,
        pembayaran: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
        tagihan: 'Rp. 10.600.000 BELUM LUNAS',
      },
      {
        Tagihan: 'KEU0965Achika Dwi Arofah201901001',
        tglTag: '2020-09-04',
        keterangan: `1. Uang Kegiatan Mahasiswa (IKM) 150.000
2. Biaya Kuliah dan Praktek 8.950.000
3. Biaya Pengembangan sarana dan prasarana 1.500.000
Pembayaran Ke No.Rekening Bank:
1. BNI SYARIAH 0755578889`,
        jurusan: `DIII KEPERAWATAN
2020/2021-Ganjil III`,
        pembayaran: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
      },
      {
        Tagihan: 'KEU0965Achika Dwi Arofah201901001',
        tglTag: '2020-09-04',
        keterangan: 'D III keterangan Keperawatan5',
        jurusan: `DIII KEPERAWATAN
2020/2021-Ganjil III`,
        pembayaran: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
      },
      {
        Tagihan: 'KEU0965Achika Dwi Arofah201901001',
        tglTag: '2020-09-04',
        keterangan: 'D III keterangan Keperawatan',
        jurusan: `DIII KEPERAWATAN
2020/2021-Ganjil III`,
        pembayaran: 'Ns. Yuanita Panma, M.Kep.Sp.Kep.M.B',
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
                <Text style={styles.headerText}>Tagihan</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Tanggal Tagihan</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Keterangan</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Jurusan</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Tagihan</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Pembayaran</Text>
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
                  <Text>{row.Tagihan}</Text>
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
                  <Text>{row.tglTag}</Text>
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
                  <Text>{row.keterangan}</Text>
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
                  <Text>{row.jurusan}</Text>
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
                  <Text>{row.pembayaran}</Text>
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
                  <Text>{row.jurusan}</Text>
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
                  <Icon jurusan="plus-square" color="green" size={30} />
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
