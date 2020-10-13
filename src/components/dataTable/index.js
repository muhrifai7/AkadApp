import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

const Datatable = ({header, datatable = [], page = 1, perPage = 5, style}) => {
  const [state, setState] = useState({
    datatable,
    page: page - 1,
    perPage,
    numberOfPages: Math.ceil(datatable.length / perPage),
  });

  const getValue = (object, path) => {
    let d = path
      .replace(/\[/g, '.')
      .replace(/\]/g, '')
      .split('.')
      .reduce((o, k) => (o || {})[k], object);
    console.log(d, 'dddddd');
    return path
      .replace(/\[/g, '.')
      .replace(/\]/g, '')
      .split('.')
      .reduce((o, k) => (o || {})[k], object);
  };

  useEffect(() => {
    //console.log('useEffect:', state);
  });

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>No</DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell numeric>Latdadjnjsad</DataTable.Cell>
        <DataTable.Cell numeric>Latdadjnjsad</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>2</DataTable.Cell>
        <DataTable.Cell numeric>Latdadjnjsa</DataTable.Cell>
        <DataTable.Cell numeric>Latdadjnjsad</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={(page) => {
          console.log(page);
        }}
        label="1-2 of 6"
      />
    </DataTable>
  );
};

export default Datatable;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 5,
    justifyContent: 'flex-start',
  },
  // row: {
  //   paddingHorizontal: 5,
  //   width: 110,
  //   overflow: 'hidden',
  //   justifyContent: 'center',
  //   backgroundColor: 'red',
  //   borderWidth: 1,
  //   borderColor: 'black',

  // },
});
