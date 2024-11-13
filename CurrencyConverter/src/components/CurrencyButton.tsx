import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type CurrencyProps = PropsWithChildren<{
    country: string;
    currency: string;
    flag: string;
  }>;
  
export function CurrencyButton({country, currency ,flag}: CurrencyProps): React.JSX.Element {
    return (
      <View style={styles.currencyButton}>
        <Text
          style={styles.flag}>
          {flag}
        </Text>
        <Text
          style={styles.country}>
          {country}
        </Text>
        <Text
          style={[
            styles.currency,
          ]}>
          {currency}
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    currencyButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 32,
      paddingHorizontal: 24,
      borderWidth: 0.5,
      marginHorizontal: 10,
      borderRadius: 10,
      borderColor: '#4a4a4a'
    },
    country: {
      fontSize: 18,
      fontWeight: '600',
      width: 190
    },
    currency: {
      fontSize: 18,
      fontWeight: '400',
    },
    flag:{
      fontSize: 48,
      marginRight: 68,
    }
  });