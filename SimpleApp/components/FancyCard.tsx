import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Historical Places</Text>
      <View style={styles.container}>
        <Image 
          source={require('../assets/taj-mahal.png')}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Taj Mahal</Text>
        <Text style={styles.cardLabel}>Agra, India</Text>
        <Text style={styles.cardDescription}> Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.</Text>
        <Text style={styles.cardFooter}> 12 mins away</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 16,
  //   backgroundColor: '#fff',
  // },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    backgroundColor: '#fff',
    padding: 16,
  },
  cardImage: {
    width: '100%', // Set the width of the image
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 12,
    lineHeight: 20,
  },
  cardFooter: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'right',
  },
});
