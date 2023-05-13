import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import { Fonts, GifI, IntroIIIImg } from '../constants'
import CenturyLogo from '../components/CenturyLogo'
import { IntroButton, IntroTransition, SkipButton } from '../components'

const IntroIII = () => {
  return (
    <ImageBackground source={IntroIIIImg} resizeMode='cover' style={{ flex: 1 }}>
      <View style={{ marginTop: Constants.statusBarHeight, paddingVertical: '20%', paddingHorizontal: 30 }}>

        {/* Century Logo */}
        <CenturyLogo />

        {/* Animation */}
        <Image source={GifI} style={{ width: 198, height: 198, marginTop: '20%' }} />
        {/* <LottieView
          source={require('')}
          autoPlay
          loop
          style={{
            width: 200,
            height: 200,
          }}
        /> */}

        {/* Text */}
        <Text style={{ fontFamily: Fonts.Regular, fontSize: 20, marginVertical: 20 }}>
          Control all your banks, in one app, and buy any asset without stress
        </Text>

        {/* Next and Skip button */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
          <IntroButton />
          <SkipButton />
        </View>

        {/* Progress */}
        <IntroTransition numOfPosition={3} />
      </View>
      <StatusBar style="dark" />
    </ImageBackground>
  )
}

export default IntroIII