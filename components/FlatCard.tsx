import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Ash</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Purple</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Ash</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    }, 
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    }, 
    cardOne:{
        backgroundColor: '#9ddbca'
    },
    cardTwo:{
        backgroundColor: '#4a4a4a'
    },
    cardThree:{
        backgroundColor: '#b79ddb'
    }
})