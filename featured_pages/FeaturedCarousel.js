import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import Styles from './FeaturedStyles'
import Swiper from 'react-native-swiper'
const testArray = [{num:1},{num:2},{num:3}]

const CarouselItem = ({ walkName,park,image }) => {
  return(
  <View style={Styles.slide}>
    <ImageBackground source={{uri : image}} style={Styles.carouselBackground}>
      <View style={Styles.carouselInnerView}>
        <Text>{walkName}</Text>
        <Text style={Styles.ListSubtitle}>{park}</Text>
      </View>
    </ImageBackground>
  </View>
  )
}

const featuredCarousel = (props) => {
  return (
    <View style={Styles.swipeView}>
      <Swiper showsButtons={true} showsPagination={false}>
        {props.walks.map(walk => {
          return (
            <CarouselItem walkName={walk.walkName} park={walk.park} image={walk.image}/>
          )
        })}
      </Swiper>
    </View>
  )
}
export default featuredCarousel