import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Pressable
} from 'react-native';
import { CurrencyButton } from './components/CurrencyButton';
import { currenciesInTaka } from './Currency';

function App(): React.JSX.Element {
 const Data = currenciesInTaka;
 const [inputValue, setInputValue] = useState('');
 const [result, setResult] = useState('');

 const changeCurrency = (targetCurrency:Currency) =>{
  const currency = parseFloat(inputValue) * targetCurrency.value
  const showCurrency = `${targetCurrency.symbol} ${currency.toFixed(2)}`
  setResult(showCurrency)
 }

  return (
    <SafeAreaView>
      <StatusBar/>
      {/* <ScrollView> */}
        <View>
          <View>
            <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            />
            {result &&
            <Text>{result}</Text>
            }
          </View>
          <View style={styles.bottomContainer}>
            <FlatList
            data={Data}
            keyExtractor={(item)=> item.country}
            renderItem={({item})=>(
              <Pressable
              onPress={()=>{changeCurrency(item)}}
              >
                <CurrencyButton {...item}/>
              </Pressable>
            )}
            />
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
