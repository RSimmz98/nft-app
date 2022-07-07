import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, Flastlist } from 'react-native'

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';

  const Details = ({ route, navigation}) => {
    const { data } = route.params;

    return(
    <SafeAreaView style={{ flex: 1}}>
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
           backgroundColor: 'rgba(255,255,255,0.5)',
           zindex: 1,
    }}
      >
        <RectButton 
          minWidth={170}
          fontSize={SIZES.large}
           {...SHADOWS.dark} />
      </View>
      <Flastlist 
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
        />
    </SafeAreaView>
  )
}

export default Details
