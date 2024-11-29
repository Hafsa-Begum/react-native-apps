import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}: DetailsProps) => {
    const {ProductId} = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text>Details : {ProductId}</Text>
      <Button
      title='Camera Screen'
      onPress={()=>{
        navigation.navigate('CamScreen')
      }}
      />
      <Button
      title='Go to specific screen'
      onPress={()=>{
        navigation.pop()
      }}
      />
      <Button
      title='Go back'
      onPress={()=>{
        navigation.goBack()
      }}
      />
      <Button
      title='Go to First Screen'
      onPress={()=>{
        navigation.popToTop()
      }}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})