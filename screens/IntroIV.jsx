import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import { Colors, Fonts, GifI, IntroIVImg } from '../constants'
import CenturyLogo from '../components/CenturyLogo'
import { IntroTransition } from '../components'

const IntroIV = () => {
  return (
    <ImageBackground source={IntroIVImg} resizeMode='cover' style={{ flex: 1 }}>
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
          Get exclusive bonuses, easy transaction and fast withdrawal
        </Text>

        {/* Get started button */}
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginVertical: 15 }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.Green,
              borderRadius: 15,
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 5
            }}
          >
            <Text style={{ color: '#FFF', fontFamily: Fonts.Medium }}>Get started for free</Text>
            <AntDesign name="arrowright" color={"#FFF"} size={22} />
          </TouchableOpacity>
        </View>

        {/* Progress */}
        <IntroTransition numOfPosition={4} />
      </View>
      <StatusBar style="dark" />
    </ImageBackground>
  )
}

export default IntroIV