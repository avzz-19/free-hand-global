import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text, Image} from 'react-native';
import Drive_Us_Icon from '../assets/Drive_Us_Icon.png';
import TransformationIcon from '../assets/TransformationIcon.png';
import Horizontal_Circle from '../assets/Horizontal_Circle.png';
import {Bullet} from './bullets';
import {Card} from './card';
import Scroll from '../assets/Scroll.png';
import Link_Arrow from '../assets/Link_Arrow.png';
import Ecosystem from '../assets/Ecosystem.png';
export const Page2 = () => {
  return (
    <View style={{marginTop: 300, marginHorizontal: 30}}>
      <Text style={styles.h1}>What drives us</Text>
      <Text style={styles.h2}>
        With our interdisciplinary team spirit of design, technology and
        business expertise, we develop smart IoT solutions that take our
        customers and their business models to the next level.
      </Text>
      <View style={{alignItems: 'center'}}>
        <Image source={Drive_Us_Icon} style={{width: 275, height: 200}} />
      </View>
      <Bullet
        No="01"
        Heading="Transformational"
        Para="Smart Product Transformation is the product-driven transformation of your business model. Identify the potential of your product portfolio and summarize it in a holistic IoT strategy for your company."
        ImgPath={TransformationIcon}
        styleImg={{width: 250, height: 265}}
      />
      <Bullet
        No="02"
        Heading="Interdisciplinary"
        Para="Use our award-winning team for the complex development of successful IoT products and ensure the highest quality in UX and industrial design, software engineering, hardware manufacturing and management consulting."
        ImgPath={Horizontal_Circle}
        styleImg={{width: 253, height: 149}}
      />
      <Bullet
        No="03"
        Heading="End to End"
        Para='We are your "one-stop shop" for successful smart connected devices and IoT services. Reduce your time-to-market and get all solutions from a single source, from the product idea to series production.'
      />
      <View style={{alignItems: 'center', marginTop: 48}}>
        <Text style={styles.h1}>Four steps to your success</Text>
        <Text style={styles.h3}>How we work</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 50,
        }}>
        <Image
          source={Link_Arrow}
          style={{
            width: 40,
            height: 40,
            marginRight: 15,
            marginVertical: 24,
          }}></Image>
        <Text style={styles.text}>Go to the monkey box case</Text>
      </View>
      <Card />
      <View style={{alignItems: 'center'}}>
        <Image source={Scroll} style={{marginVertical: 40}}></Image>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={{paddingBottom: 38, alignItems: 'center'}}>
          <Text style={styles.h1}>Our Expertise</Text>
          <Text style={styles.h3}>IOT Ecosystem</Text>
        </View>
        <Image source={Ecosystem} style={{width: 252, height: 272}} />
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
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
    color: '#CFEEFF',
    lineHeight: 22,
  },
});
