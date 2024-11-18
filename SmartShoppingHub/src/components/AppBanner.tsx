import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const AppBanner = () => {
  const phoneY = useRef(new Animated.Value(300)).current; // Initial position off-screen
  const textOpacity = useRef(new Animated.Value(0)).current; // Initial opacity

  useEffect(() => {
    // Start animations
    Animated.sequence([
      // Animate the phone sliding in
      Animated.spring(phoneY, {
        toValue: 0,
        useNativeDriver: true,
        damping: 8,
      }),
      // Animate the text opacity
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [phoneY, textOpacity]);

  return (
    <View style={styles.bannerContainer}>
      {/* Background */}
      <View style={styles.background} />

      {/* Animated Smartphone Illustration */}
      <Animated.Image
        source={{
          uri: 'https://rukminim1.flixcart.com/image/300/400/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg',
        }}
        style={[
          styles.phoneImage,
          { transform: [{ translateY: phoneY }] }, // Apply phone animation
        ]}
      />

      {/* Animated Main Text */}
      <Animated.Text
        style={[styles.mainText, { opacity: textOpacity }]} // Apply text fade-in animation
      >
        Discover. Compare. Save.
      </Animated.Text>

      {/* Animated Subtext */}
      <Animated.Text
        style={[styles.subText, { opacity: textOpacity }]} // Apply text fade-in animation
      >
        Find Top Deals on Electronics
      </Animated.Text>
      <Animated.Text
        style={[styles.subText, { opacity: textOpacity }]} // Apply text fade-in animation
      >
        Track Discounts & Ratings
      </Animated.Text>

      {/* Download Button */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download Now!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#e6f7ff',
    borderRadius: 20,
  },
  phoneImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  subText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 5,
  },
  downloadButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppBanner;
