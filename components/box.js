import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text, Image} from 'react-native';
import Service_Icon from '../assets/Service_Icon.png';
export const PurpleBox = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.right} />
      <View style={styles.box}>
        <Text style={styles.h1}>CONSULTING</Text>
        <Text style={styles.h2}>Think big start small</Text>
        <Text style={styles.h3}>Development of your IoT strategy</Text>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 40,
          }}>
          <Image source={Service_Icon} style={styles.imgstyle} />
        </View>
      </View>
      <View style={styles.left} />
    </View>
  );
};
const styles = StyleSheet.create({
  imgstyle: {
    width: 111,
    height: 108,
  },
  box: {
    boxSizing: 'border-box',
    backgroundColor: '#372154',
    borderWidth: 1,
    borderColor: '#EF7D00',
    borderRadius: 16,
    height: 391,
    width: 279,
    marginHorizontal: 16,
  },
  h1: {
    color: '#EF7D00',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23,
    padding: 10,
    marginLeft: 23,
    marginTop: 21,
  },
  h2: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 36,
    color: '#FFFFFF',
    padding: 10,
    marginTop: 16,
    marginLeft: 23,
  },
  h3: {
    fontWeight: '700',
    fontSize: 12.5,
    lineHeight: 19,
    color: '#FFFFFF',
    padding: 10,
    marginTop: 8,
    marginLeft: 23,
    marginRight: 22,
  },
  right: {
    // left: 65.87,
    // right: '91.47%',
    // top: 30,
    // bottom: '88.12%',
    borderRadius: 16,
    width: 279,
    height: 319,
    backgroundColor: '#4E2154',
  },
  left: {
    // left: -800.87,
    // right: 91.47,
    // top: 30,
    // bottom: '88.12%',
    borderRadius: 16,
    width: 279,
    height: 319,
    backgroundColor: '#4E2154',
  },
});
