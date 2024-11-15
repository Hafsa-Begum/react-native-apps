import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation} : HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
      title='Go to Details'
    //   onPress={()=>{
    //     navigation.navigate('Details', {
    //         ProductId: '123'
    //     })
    //   }}
      onPress={()=>{
        navigation.push('Details', {
            ProductId: '123'
        })
      }}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})