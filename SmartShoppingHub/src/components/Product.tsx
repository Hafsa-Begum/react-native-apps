import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type Product = PropsWithChildren<{
    item: Product
}>

const Product = ({ item }: Product) => {
  return (
        <>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.details}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.discountPrice}>₹{item.discountPrice.toLocaleString()}</Text>
        <Text style={styles.originalPrice}>₹{item.originalPrice.toLocaleString()}</Text>
        <Text style={styles.offerPercentage}>{item.offerPercentage}% off</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          <Text style={styles.ratingCount}>({item.ratingCount})</Text>
        </View>
      </View>
      </>
  );
};

const styles = StyleSheet.create({
  
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  details: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#757575',
  },
  offerPercentage: {
    fontSize: 14,
    color: '#2e7d32',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#fbc02d',
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 12,
    color: '#757575',
  },
});

export default Product;
