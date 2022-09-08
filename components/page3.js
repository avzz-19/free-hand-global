import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
export const Page3 = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.numyellow}>01</Text>
        <Text style={styles.numwhite}>02</Text>
        <Text style={styles.numwhite}>03</Text>
      </View>
      <View>
        <Text style={styles.h1}>Connectivity</Text>
        <Text style={styles.h2}>
          The core of every IoT product is the perfect connection to digital
          networks. Find the optimal IoT connector for your product.
        </Text>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.h1}>U Experts facts</Text>
          <Text style={styles.h3}>We in Numbers</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Text style={styles.nums}>17</Text>
            <Text style={styles.label}>Industry Sectors</Text>
          </View>
          <View>
            <Text style={styles.nums}>400</Text>
            <Text style={styles.label}>Projects</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 36, marginBottom: 60}}>
          <Text style={styles.nums}>2010</Text>
          <Text style={styles.label}>Fundings</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  numyellow: {
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 47,
    color: '#EF7D00',
    padding: 10,
    marginLeft: 18,
  },
  numwhite: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 31,
    color: '#CFEEFF',
    padding: 22,
  },
  h1: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 31,
    color: '#EF7D00',
    paddingHorizontal: 28,
  },
  h2: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24,
    color: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 28,
  },
  h3: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 36,
    color: '#FFFFFF',
    marginTop: 14,
  },
  nums: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 60,
    lineHeight: 90,
    color: '#192239',
    textShadowColor: 'white',
    textShadowRadius: 3,
  },
  label: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24,
    color: '#CFEEFF',
  },
});
