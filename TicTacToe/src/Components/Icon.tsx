import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name: string
}>

const Icons =({name} : IconProps)=> {
   switch (name) {
    case 'circle':
        return <Icon name='circle-thin' size={38} color='#FF78C4'/>
   
    case 'cross':
        return <Icon name='times' size={38} color='#9B4444'/>
   
    default:
        return <Icon name='pencil' size={38} color='#e7e7e7'/>
   }
    
     
   
}

const styles = StyleSheet.create({})
export default Icons;