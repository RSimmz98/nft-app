  import React from 'react'
  import {useState} from 'react'
  import {View, SafeAreaView, FlatList, Text} from 'react-native'
  
  //local imports 
  import { COLORS, NFTData} from '../constants';
  import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

  const Home = () => {
    return(
       <SafeAreaView style={{flex:1}}>

      </SafeAreaView>
  )
}

export default Home

//flat list is similar to map in react
  //it renders only when they are about to be shown on the screen --saves memory works like lazy loading
  //SafeAreaView works like our outta div
