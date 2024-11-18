import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import Product from '../components/Product'

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}: DetailProps) => {
    const {item} = route.params;
  return (
    <SafeAreaView style={[styles.container, styles.card]}>
      <StatusBar/>
      <Product item={item}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        // flex: 1,
        backgroundColor: '#f0f8ff'

    },
    card: {
        height:320,
        width: 300,
        backgroundColor: '#fff',
        marginRight: 15,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        marginHorizontal: 65
      },
})
export default Details