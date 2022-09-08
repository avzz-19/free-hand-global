import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import Drive_Us_Icon from '../assets/Drive_Us_Icon.png';
import TransformationIcon from '../assets/TransformationIcon.png';
import Horizontal_Circle from '../assets/Horizontal_Circle.png';
import {Bullet} from './Bullets';
import Scroll from '../assets/Scroll.png';
import Link_Arrow from '../assets/Link_Arrow.png';
import Ecosystem from '../assets/Ecosystem.png';
import CardImg from '../assets/CardImg.png';
import Blueberry from '../assets/Blueberry.jpeg';
import ThirdImg from '../assets/ThirdImg.png';
import Carousel from './Carousel';
export const Page2 = () => {
  const carouselCards = [
    {
      count: '01',
      imgSource: CardImg,
      des: 'Design thinking methods tailored to Smart Connected Devices lead to a clear structure and a memorable visualization of ideas, use cases and value propositions.',
    },
    {
      count: '02',
      imgSource: Blueberry,
      des: 'Fresh blueberries are a popular summer treat. They have a sweet flavor, and they are succulent and nutritious.Blueberries can be eaten freshly picked or incorporated into a variety of recipes.',
    },
    {
      count: '03',
      imgSource: ThirdImg,
      des: 'The iPhone is a line of smartphones designed by Apple Inc. These devices use Apple iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs.',
    },
  ];
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
        styleImg={{width: 250, height: 265.5}}
      />
      <Bullet
        No="02"
        Heading="Interdisciplinary"
        Para="Use our award-winning team for the complex development of successful IoT products and ensure the highest quality in UX and industrial design, software engineering, hardware manufacturing and management consulting."
        ImgPath={Horizontal_Circle}
        styleImg={{width: 253.5, height: 149}}
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
      <View style={styles.row}>
        <TouchableOpacity>
          <Image source={Link_Arrow} style={styles.arrow}></Image>
        </TouchableOpacity>
        <Text style={styles.text}>Go to the monkey box case</Text>
      </View>
      <Carousel arr={carouselCards} />
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
  arrow: {
    width: 40,
    height: 40,
    marginRight: 15,
    marginVertical: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 50,
  },
});
