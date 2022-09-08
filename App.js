/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Banner_Image from './assets/Banner_Image.png';
import {Page2} from './components/Page2';
import {Page3} from './components/Page3';
import Scroll from './assets/Scroll.png';
import Overlay from './assets/Overlay.png';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View,
} from 'react-native';
import {PurpleBox} from './components/Box';
import {UserPage} from './components/User';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{height: '100%', backgroundColor: '#192239'}}>
        <ImageBackground
          source={Banner_Image}
          style={{width: '100%', height: 550}}>
          <Text style={styles.highlight}>EXPERTEN</Text>
          <View style={{alignItems: 'center'}}>
            <Image source={Overlay} width="351" height="351" />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>IOT products from one source</Text>
            <Text style={styles.h1}>How smart is your product?</Text>
            <Text style={styles.h3}>
              From strategy of lifecycle management - we support innovative
              companies in the development of networked IoT devices and
              services.
            </Text>
            <Image source={Scroll} style={{marginVertical: 40}}></Image>
          </View>
          <View>
            <PurpleBox
              title="CONSULTING"
              bigHeading="Think big start small"
              desc="Development of your IoT strategy"
            />
          </View>
        </ImageBackground>
        <Page2 />
        <Page3 />
        <UserPage />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    color: 'white',
    fontSize: 18,
    padding: 13,
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    lineHeight: 41.4,
    textAlign: 'center',
  },
  h2: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  h3: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
    width: 315,
    height: 106,
    paddingTop: 8,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -302,
  },
});

export default App;
