import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Service_Icon from '../assets/Service_Icon.png';
import LinearGradient from 'react-native-linear-gradient';
export const PurpleBox = props => {
  const {title, bigHeading, desc} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LinearGradient
        colors={['#192239', '#4E2154']}
        style={styles.right}></LinearGradient>
      <LinearGradient
        style={styles.box}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#4E2154', '#192239']}>
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.h2}>{bigHeading}</Text>
        <Text style={styles.h3}>{desc}</Text>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 40,
          }}>
          <Image source={Service_Icon} style={styles.imgstyle} />
        </View>
      </LinearGradient>
      <LinearGradient
        style={styles.left}
        colors={['#192239', '#4E2154']}></LinearGradient>
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
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#EF7D00',
    borderRadius: 16,
    height: 391,
    width: 279,
    marginHorizontal: 16,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
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
    backgroundColor: 'transparent',
  },
  left: {
    // left: -800.87,
    // right: 91.47,
    // top: 30,
    // bottom: '88.12%',
    borderRadius: 16,
    width: 279,
    height: 319,
    backgroundColor: 'transparent',
  },
});
