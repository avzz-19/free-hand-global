import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text, Image} from 'react-native';
import CardImg from '../assets/CardImg.png';

export const Card = () => {
  return (
    <View style={styles.cardStyle}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={CardImg}
          style={{width: 218, height: 230, marginTop: 50}}
        />
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.para}>01</Text>
      </View>
      <Text style={styles.para}>
        Design thinking methods tailored to Smart Connected Devices lead to a
        clear structure and a memorable visualization of ideas, use cases and
        value propositions.
      </Text>
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
