import { Pressable, StyleSheet } from 'react-native';
import React from 'react';

import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import apiAxios from '@/components/axiosApi';
import { CurrencyData } from '@/@types/typeCurrentData';
import { Image } from 'expo-image';
import dolar from '@/assets/images/dolar.png';

export default function TabOneScreen() {
  const [coinData, setCoinData] = useState<CurrencyData[]>();

  async function fetchPriceCoin() {
    const response = await apiAxios.get(`USD-BRL/1`);
    if (response.status == 200) {
      return setCoinData(response.data);
    }
  }

  useEffect(() => {
    fetchPriceCoin();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#00000000',
          width: 250,
          height: 210,
          alignItems: 'center',
          marginTop: 100,
        }}
      >
        <Image style={styles.image} source={dolar} transition={1000} />
      </View>

      <View style={{ backgroundColor: 'whites', marginTop: 30 }}>
        <Text style={styles.labelData1}>O DólarAmericano está:</Text>
      </View>
      <View style={{ backgroundColor: 'whites', marginTop: 30 }}>
        <Text style={styles.labelData}>
          R$ {coinData && parseFloat(coinData[0].ask).toFixed(2)}{' '}
        </Text>
      </View>

      <View style={styles.divButtons}>
        <Pressable
          style={styles.buttom}
          onPress={() => {
            fetchPriceCoin();
          }}
        >
          <Text style={{ color: 'black', fontWeight: 400, fontSize: 20 }}>
            Atualizar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#0b1c2c',
  },
  divButtons: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0b1c2c',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  labelData: {
    fontSize: 56,
    color: 'white',
  },
  labelData1: {
    fontSize: 24,
    marginTop: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  buttom: {
    marginTop: 25,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#c7ed63',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
