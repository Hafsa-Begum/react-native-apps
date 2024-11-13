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
import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {
 const Data = currenciesInTaka;
 const [inputValue, setInputValue] = useState('');
 const [result, setResult] = useState('');

 const changeCurrency = (targetCurrency:Currency) =>{
  if(!inputValue){
    return Snackbar.show({
      text: 'Enter a number!',
      duration: Snackbar.LENGTH_SHORT,
      action: {
        backgroundColor: 'green',
        textColor: 'white',
        marginBottom: 100
      },
    });
  }
  if(!isNaN(inputValue)){
    const currency = parseFloat(inputValue) * targetCurrency.value
    const showCurrency = `${targetCurrency.symbol} ${currency.toFixed(2)}`
    setResult(showCurrency)
  }
  else{
    return Snackbar.show({
      text: 'valid input required.',
      duration: Snackbar.LENGTH_SHORT,
    });
  }
 }

  return (
    <SafeAreaView>
      <StatusBar/>
      {/* <ScrollView> */}
        <View>
          <Text style={styles.sectionTitle}>Currency Converter</Text>
          <View style={styles.topContainer}>
            <TextInput
            style={styles.inputField}
            value={inputValue}
            onChangeText={setInputValue}
            maxLength={16}
            placeholder="Enter value"
            />
            {result &&
            <Text style={styles.result}>Converted - {result}</Text>
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
  topContainer: {
    marginTop: 32,
    marginHorizontal: 80
  },
  sectionTitle: {
    marginTop: 32,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  inputField: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    borderWidth:1,
    paddingHorizontal: 54,
    borderRadius: 8,
    textAlign: 'center'
  },
  result: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 14,
    textAlign: 'center'
  },
});

export default App;
