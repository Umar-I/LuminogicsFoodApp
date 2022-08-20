import React, {useEffect, useState} from 'react';
import {Text, View, Alert, ScrollView, Button} from 'react-native';
import getStyles from './style';
import {useBackHandler} from '@react-native-community/hooks';
import OrderDetail from '../commons/orderDetails';
import FlatDataList from '../commons/flatList';
import LoadingIndicator from '../commons/loadingIndicator';
import URL from '../../constants/constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const today = new Date();

const TeaGenerateReport = ({navigation: {goBack}}) => {
  const styles = getStyles();
  const [totalCup, setTotalCup] = useState(0);
  const [halfCup, setHalfCup] = useState(0);
  const [fullCup, setFullCup] = useState(0);
  const [checkData, setCheckData] = useState();

  const [Data, setData] = useState([]);
  function confirmExit() {
    goBack();
    return true;
  }
  useBackHandler(confirmExit);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    const token = await AsyncStorage.getItem('token');

    let res = await axios.get(
      `${URL}/api/admin/get-available-orders/Evening-Tea`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    );
    if (
      res?.data?.metadata?.status === 'SUCCESS' &&
      res?.data?.metadata?.message === 'No Record Found'
    ) {
      setCheckData(null);
      res?.data?.metadata?.status;
    } else {
      setTotalCup(res?.data?.payload?.data?.TotalCups);

      setData(res?.data?.payload?.data?.orders);
      setHalfCup(res?.data?.payload?.data?.HalfCups);
      setFullCup(res?.data?.payload?.data?.FullCups);
      setCheckData(res?.data?.metadata?.status);
    }
  }

  return (
    <View flex={1} style={{backgroundColor: '#ffffff'}}>
      <OrderDetail
        title="Evening Tea Requirements"
        date={
          today.getDate() +
          '/' +
          (today.getMonth() + 1) +
          '/' +
          today.getFullYear()
        }
        item="Cups"
        total={totalCup}
        fullCups={fullCup}
        halfCups={halfCup}
      />
      <View flex={7.5}>
        {Data.length !== 0 ? (
          <FlatDataList Data={Data} />
        ) : (
          <LoadingIndicator title={checkData === null ? true : false} />
        )}
      </View>
    </View>
  );
};
export default TeaGenerateReport;
