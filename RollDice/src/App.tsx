import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  ImageSourcePropType,
  Pressable
} from 'react-native';

import black1 from '../assets/black1.png'
import black2 from '../assets/black2.png'
import black3 from '../assets/black3.png'
import black4 from '../assets/black4.png'
import black5 from '../assets/black5.png'
import black6 from '../assets/black6.png'
import white1 from '../assets/white1.png'
import white2 from '../assets/white2.png'
import white3 from '../assets/white3.png'
import white4 from '../assets/white4.png'
import white5 from '../assets/white5.png'
import white6 from '../assets/white6.png'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceImageProps = PropsWithChildren<{
  imageUri: ImageSourcePropType;
}>;

function DiceImage({children, imageUri}: DiceImageProps): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.image} source={imageUri}/>
    </View>
  );
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(black1)
  const [bgColor, setBgColor] = useState("#ffffff")
  const [whiteScore, setWhiteScore] = useState(1)
  const [blackScore, setBlackCore] = useState(1)
  const [totalWhiteScore, setTotalWhiteScore] = useState(0)
  const [totalBlackScore, setTotalBlackScore] = useState(0)
  // let totalWhite = whiteScore;
  // let totalBlack = blackScore;
const rollDice = (diceColor:string)=>{
  const randomNumber = Math.floor(Math.random()*6);
    
    if(diceColor !== 'white'){
      setBgColor('white')
      setTotalBlackScore(prevScore=> prevScore + randomNumber)
      switch (randomNumber) {
        case 1:
          setDiceImage(black1)
          setBlackCore(1)
          break;
        case 2:
          setDiceImage(black2)
          setBlackCore(2)
          break;
        case 3:
          setDiceImage(black3)
          setBlackCore(3)
          break;
        case 4:
          setDiceImage(black4)
          setBlackCore(4)
          break;
        case 5:
          setDiceImage(black5)
          setBlackCore(5)
          break;
        case 6:
          setDiceImage(black6)
          setBlackCore(6)
          break;
      
        default:
          setDiceImage(black1)
          setBlackCore(1)
          break;
      }
      
    }
    else{
      setBgColor('black')
      setTotalWhiteScore(prevScore=> prevScore + randomNumber)
      switch (randomNumber) {
        case 1:
          setDiceImage(white1)
          setWhiteScore(1)
          break;
        case 2:
          setDiceImage(white2)
          setWhiteScore(2)
          break;
        case 3:
          setDiceImage(white3)
          setWhiteScore(3)
          break;
        case 4:
          setDiceImage(white4)
          setWhiteScore(4)
          break;
        case 5:
          setDiceImage(white5)
          setWhiteScore(5)
          break;
        case 6:
          setDiceImage(white6)
          setWhiteScore(6)
          break;
      
        default:
          setDiceImage(white1)
          setWhiteScore(1)
          break;
      }
    
    }
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger("impactLight", options);
    
  }
  const stopScoring = () =>{
    setTotalBlackScore(0);
    setTotalWhiteScore(0)
  }
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: bgColor}]}>
      <StatusBar
        backgroundColor={bgColor}
      />
      <View
          >
          <Text style={styles.sectionTitle}>Win getting highest score!</Text>
        </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.scoreContainer}>
        <Text style={styles.blackScore}>
        Score Pink = {totalBlackScore}
        </Text> 
        <Text style={styles.whiteScore}>
        Score Gray = {totalWhiteScore}
        </Text> 
        </View>  
        <View style={styles.diceArea}>
        <View>
          <DiceImage imageUri={diceImage}/>
        </View>
        <View>
        <Pressable
        onPress={()=>rollDice('black')}
        style={styles.blackBtn}
        >
          <Text style={styles.blackBtnText}>Roll Dice</Text>
        </Pressable>
        <Pressable
        style={styles.whiteBtn}
        onPress={()=>rollDice('white')}
        >
          <Text style={styles.whiteBtnText}>Roll Dice</Text>
        </Pressable>
        </View>

        </View>
        <View style={styles.startAndStop}>
        {/* <Pressable style={styles.start}>
            <Text style={styles.startText}>Start</Text>
          </Pressable> */}
          <Pressable
          onPress={stopScoring}
           style={styles.stop}
           >
            <Text style={styles.stopText}>Stop</Text>
          </Pressable>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  sectionContainer: {
    marginTop: 42,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 40,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#795fc0cc'
  },
  scoreContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  blackScore:{
    margin: 8,
    color: '#f7acde',
    fontSize: 18,
  },
  whiteScore:{
    margin: 8,
    color: '#4a4a4a',
    fontSize: 18,
  },
  diceArea:{
    borderWidth:1,
    padding:10,
    borderRadius:10
  },
  image:{
    height: 160,
    width: 160,
    borderRadius: 8,
    marginLeft:30
  },
  blackBtn: {
    fontWeight: '700',
    backgroundColor: '#f7acde',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 28
  },
  blackBtnText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  whiteBtn: {
    fontWeight: '700',
    backgroundColor: '#4a4a4a',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 18

  },
  whiteBtnText:{
    color: '#e7e7e7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  startAndStop:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 48
  },
  start:{
    fontWeight: '700',
    backgroundColor: '#795fc0cc',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 18
  },
  stop:{
    fontWeight: '700',
    backgroundColor: '#f49197',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 18,
    marginLeft:20
  },
  startText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stopText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default App;
