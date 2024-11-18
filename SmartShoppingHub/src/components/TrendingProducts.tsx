import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../App';
import { productList } from '../data/products';
import Product from './Product';

// type TrendingProductsProps = NativeStackScreenProps<RootStackParamList, 'Details'>



const TrendingProducts = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Products</Text>
      <FlatList
        data={productList}
        renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate('Details', {
                item: item,
              });
            }}
        >
            <Product item={item} />
        </TouchableOpacity>
        )
        
    }
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        width: 200,
        backgroundColor: '#fff',
        marginRight: 15,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
      },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 5,
  },
});

export default TrendingProducts;
