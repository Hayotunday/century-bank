import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import { Fonts, GifI, IntroIImg } from '../constants'
import CenturyLogo from '../components/CenturyLogo'
import { IntroButton, IntroTransition, SkipButton } from '../components'

const IntroI = () => {
  return (
    <ImageBackground source={IntroIImg} resizeMode='cover' style={{ flex: 1 }}>
      <View style={{ marginTop: Constants.statusBarHeight, paddingVertical: '20%', paddingHorizontal: 30 }}>

        {/* Century Logo */}
        <CenturyLogo />

        {/* Animation */}
        <Image source={GifI} style={{ width: 198, height: 198, marginTop: "20%" }} />
        {/* <LottieView
          source={require('../assets/lotties/introi.json')}
          autoPlay
          loop
          style={{
            width: 200,
            height: 200,
          }}
        /> */}

        {/* Text */}
        <Text style={{ fontFamily: Fonts.Regular, fontSize: 20, marginVertical: 20 }}>
          Make seamless day-to-day transactions and enjoy zero deposit fee
        </Text>

        {/* Next and Skip button */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
          <IntroButton />
          <SkipButton />
        </View>

        {/* Progress */}
        <IntroTransition numOfPosition={1} />
      </View>
      <StatusBar style="dark" />
    </ImageBackground>
  )
}

export default IntroI