import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text, Image} from 'react-native';
import CardImg from '../assets/CardImg.png';

export const Card = props => {
  const {imgSource = {CardImg}, count = '01', des = ''} = props;
  console.log({imgSource});
  return (
    <View style={styles.cardStyle}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={imgSource}
          style={{width: 218, height: 230, marginTop: 50}}
        />
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.para}>{count}</Text>
      </View>
      <Text style={styles.para}>{des}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#4E2154',
    display: 'flex',
    height: 520,
    width: 311,
  },
  para: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#CFEEFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
