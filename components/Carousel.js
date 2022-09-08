import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Card} from './Card';
function Index(props) {
  const {arr} = props;
  console.log(arr);
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height="520"
        autoPlay={true}
        data={[...arr.keys()]}
        scrollAnimationDuration={2000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View>
            <Card
              imgSource={arr[index].imgSource}
              count={arr[index].count}
              des={arr[index].des}
            />
          </View>
        )}
      />
    </View>
  );
}

export default Index;
