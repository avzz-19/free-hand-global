import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

export const Bullet = props => {
  const {No, Heading, Para, ImgPath, styleImg} = props;
  return (
    <View>
      <Text style={styles.h3}>{No}</Text>
      <Text style={styles.h3}>{Heading}</Text>
      <Text style={styles.h4}>{Para}</Text>
      <View style={{alignItems: 'center'}}>
        <Image source={ImgPath} style={styleImg} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  h1: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 31,
    color: '#EF7D00',
  },
  h2: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  h3: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 36,
    color: '#FFFFFF',
    marginTop: 30,
  },
  h4: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24,
    color: '#FFFFFF',
    marginTop: 30,
    marginBottom: 20,
  },
});
