import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  View, 
  TouchableOpacity,
  TextInput
 } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
     .min(4, 'characters should be at least 4!')
     .max(16, 'characters should be max 16!')
     .required('Length required')
})

export default function App() {
  const [password, setPassword] = useState('')
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number)=>{
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if(upperCase){
      characterList += upperCaseChars
    }
    if(lowerCase){
      characterList += lowerCaseChars
    }
    if(numbers){
      characterList += digitChars
    }
    if(symbols){
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult)
    setIsPasswordGenerated(true);
    console.log('clicked')
  }

  const createPassword = (characters: string, passwordLength: number) =>{
    let result = '';
    for(let i = 0; i<passwordLength ; i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result;
  }

  const resetPasswordState = () =>{
    setPassword('');
    setIsPasswordGenerated(false);
    setUpperCase(false)
    setLowerCase(false)
    setNumbers(false)
    setSymbols(false)
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.headingText}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={PasswordSchema}
       onSubmit={values=>{
        console.log("values", values)
        generatePasswordString(+values.passwordLength)}
      }
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         isSubmitting,
         handleReset,
         /* and other goodies */
       }) => (
        <>
          <View style={styles.inputWrapper}>
            <View style={styles.inputColumn}>
              <Text style={styles.heading}>Enter Password Length</Text>
              {touched.passwordLength && errors.passwordLength && (
                <Text style={styles.errorText}>{errors.passwordLength}</Text>
              )}
            </View>
            <TextInput
              style={styles.inputStyle}
              values={values.passwordLength}
              onChangeText={handleChange('passwordLength')}
              placeholder="Number"
              keyboardType='numeric'
              placeholderTextColor="#fff"
              />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Lowercase</Text>
            <BouncyCheckbox
              isChecked={lowerCase}
              disableText
              fillColor="#706fd3"
              useBuiltInState={false}
              onPress={() => {
                    setLowerCase(!lowerCase);
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include Uppercase</Text>
            <BouncyCheckbox
              isChecked={upperCase}
              disableText
              fillColor="#34ace0"
              useBuiltInState={false}
              onPress={() => {
                    setUpperCase(!upperCase);
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include Numbers</Text>
            <BouncyCheckbox
              isChecked={numbers}
              disableText
              fillColor="#ffda79"
              useBuiltInState={false}
              onPress={() => {
                    setNumbers(!numbers);
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include Symbols</Text>
            <BouncyCheckbox
              isChecked={symbols}
              disableText
              fillColor="#ff793f"
              useBuiltInState={false}
              onPress={() => {
                    setSymbols(!symbols);
              }}
            />
          </View>

          <View style={styles.formActions}>
            <TouchableOpacity
            disabled={!isValid}
            style={styles.primaryBtn}
            onPress={handleSubmit}
            >
              <Text style={styles.primaryBtnText}>Generate Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={()=>{
              handleReset();
              resetPasswordState()
            }}
            >
              <Text style={styles.secondaryBtnText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </>
       )}
     </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={styles.passwordBlock}>
            <Text style={styles.resultText}>Result:</Text>
            <Text selectable={true} style={styles.passwordText}>{password}</Text>
            <Text style={styles.copyText}>(Long press to copy)</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 415,
    paddingHorizontal: 12,
    backgroundColor: "#2c2c54",
    paddingBottom: 60

  },
  formContainer:{

  },
  headingText:{
    color: '#f7f1e3',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 32,
    textAlign: 'center'
  },
  inputWrapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginHorizontal: 10,
    marginVertical: 6
  },
  inputColumn:{
    paddingBottom: 40
  },
  inputStyle:{
    borderWidth: 1,
    backgroundColor: '#ccae62',
    paddingHorizontal: 20,
    color: '#fff',
    borderRadius: 6,
    marginBottom: 40
  },
  heading:{
    color: '#f7f1e3',
    fontSize: 18,
    fontFamily: 'poppins'
  },
  formActions:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 30
  },
  primaryBtn:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#34ace0',
    borderRadius: 8
  },
  secondaryBtn:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff5252',
    borderRadius: 8
  },
  primaryBtnText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  secondaryBtnText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  passwordBlock:{
    height: 120,
    width: 340,
    backgroundColor: "#e7e7e7",
    color: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 15,
    borderRadius: 8
  },
  errorText:{
    color: '#ff5252',
    fontSize: 16,
    // fontWeight: 'bold'
  },
  passwordText:{
    // color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 50
  },
  copyText:{
    fontSize: 12,
  },
  resultText:{
    fontSize: 16,
  }
})