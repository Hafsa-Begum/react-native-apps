import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        {/* <View style={[styles.card, styles.elevatedCardThree]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCardTwo]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCardThree]}>
            <Text>scroll</Text>
        </View> */}
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text>more...</Text>
        </View>
      </ScrollView>
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
    elevatedCard:{
        backgroundColor: '#5d78c3',
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#ffefe3'
    },
    // elevatedCardTwo:{
    //     backgroundColor: '#a863b6',
    //     elevation: 4
    // },
    // elevatedCardThree:{
    //     backgroundColor: '#d8b87e',
    //     elevation: 4
    // },
})