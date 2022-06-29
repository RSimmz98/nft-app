  import React from 'react'
  import {Text, Image,View} from 'react-native'
  import { useNavigation } from '@react-navigation/native'

  import { COLORS, SIZES, SHADOWS, assets } from '../constants'

  const NFTCard = ({data}) =>{
    const navigation = useNavigation();
    
    return (
      <View style={{
        backgroundColor : COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
      }}>
        <View style={{ width: "100%", height: 250}}>
          <Image 
            source={data.image}
            resizeMode="cover"
            style={{
              borderTopRightRadius: SIZES.font,
              borderTopLeftRadius: SIZES.font,
              height: "100%",
              width: "100%",
            }}
            />
        </View>
        <Text>Card HERE</Text>
      </View>
   
  )
}

export default NFTCard;
