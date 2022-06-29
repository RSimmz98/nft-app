import React from 'react'
import {View, TouchableOpacity, Image, Text} from 'react-native'


import { COLORS, SHADOWS, SIZES, FONTS } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
     style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}  
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24}}
        />
    </TouchableOpacity>
  )
}

export const RectButton = () => {
  return (
    <View>
      <Text>rECT BUTTON</Text>
    </View>
  )
}