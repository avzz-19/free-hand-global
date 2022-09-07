import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text, Image} from 'react-native';
import UserImage from '../assets/UserImage.png';
import Phone from '../assets/Phone.png';
import mail from '../assets/mail.png';

export const UserPage = () => {
  return (
    <View style={stylez.background}>
      <View style={{alignItems: 'center', marginVertical: 40}}>
        <Image source={UserImage} style={{width: 120, height: 120}}></Image>
        <Text style={stylez.h1}>Victoria Samuel</Text>
        <Text style={stylez.h2}>Managing underground expert</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginBottom: 24}}>
          <Image source={Phone} width="20" height="20" />
          <Text style={stylez.h2}>+21 345666 8765 </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={mail} width="20" height="20" />
          <Text style={stylez.h2}>victoria@mail.com</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <Text style={stylez.git}>Get In Touch</Text>
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={stylez.txt}>Your Name</Text>
        <Text style={stylez.txt}>________________________________________</Text>
        <Text style={stylez.txt}>Your Email</Text>
        <Text style={stylez.txt}>________________________________________</Text>
        <Text style={stylez.txt}>Your Message</Text>
        <Text style={stylez.txt}>________________________________________</Text>
        <Text style={stylez.txt}>
          I hearby agree to the{' '}
          <Text style={{textDecorationLine: 'underline'}}>data protection</Text>{' '}
          declaration
        </Text>
      </View>
    </View>
  );
};
const stylez = StyleSheet.create({
  background: {
    backgroundColor: '#4E2154',
  },
  h1: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    color: '#FFFFFF',
    marginTop: 30,
  },
  h2: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    color: '#FFFFFF',
    paddingHorizontal: 10,
  },
  git: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    color: '#EF7D00',
    marginBottom: 32,
  },
  txt: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 36,
    color: '#EF7D00',
  },
});
