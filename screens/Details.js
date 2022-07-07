import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, Flastlist } from 'react-native'

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, 
       DetailsDesc, DetailsbID } from '../components'

  const Details = ({ route, navigation}) => {
    return(
    <SafeAreaView>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
        />

        <View style={{
           width:"100%",
           position: 'absolute',
           bottom: 0,
           paddingVertical: SIZES.font,
           justifyContent: 'center',
           backgroundColor: 'rgba(255,255,0.5)',
           zindex: 1,
    }}
      >
        <RectButton 
          minWidth={170}
          fontSize={SIZES.larger}
           {...SHADOWS.dark} />
      </View>
    </SafeAreaView>
  )
}

export default Details
