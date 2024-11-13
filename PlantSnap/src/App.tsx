import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icons from './Components/Icon';
import Snackbar from 'react-native-snackbar'

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWiner, setGameWinner] = useState('');
  const [gameState, setGameState] = useState(new Array().fill('empty', 0, 8));
  const reloadGame=()=>{
    setIsCross(false);
    setGameWinner('')
    setGameState(new Array().fill('empty', 0, 8))
  }
  const checkIsWinner = () =>{
    if(gameState[0] != 'empty' && gameState[0] == gameState[1] && gameState[1] == gameState[2]){
      setGameWinner(`${gameState[0]} won the game`)
    }
    else if(gameState[3] != 'empty' && gameState[3] == gameState[4] && gameState[4] == gameState[5]){
      setGameWinner(`${gameState[3]} won the game`)
    }
    else if(gameState[6] != 'empty' && gameState[6] == gameState[7] && gameState[7] == gameState[8]){
      setGameWinner(`${gameState[6]} won the game`)
    }
    //for column
    else if(gameState[0] != 'empty' && gameState[0] == gameState[3] && gameState[3] == gameState[6]){
      setGameWinner(`${gameState[0]} won the game`)
    }
    else if(gameState[1] != 'empty' && gameState[1] == gameState[4] && gameState[4] == gameState[7]){
      setGameWinner(`${gameState[1]} won the game`)
    }
    else if(gameState[2] != 'empty' && gameState[2] == gameState[5] && gameState[5] == gameState[8]){
      setGameWinner(`${gameState[2]} won the game`)
    }
    // for diagonal
    else if(gameState[0] != 'empty' && gameState[0] == gameState[4] && gameState[4] == gameState[8]){
      setGameWinner(`${gameState[0]} won the game`)
    }
    else if(gameState[6] != 'empty' && gameState[6] == gameState[4] && gameState[4] == gameState[2]){
      setGameWinner(`${gameState[6]} won the game`)
    }
    else if(gameState[0] != 'empty'){
      setGameWinner('Draw Game...')
    }
  }

  const onChangeWinner = (itemNumber: number) =>{
    if(gameWiner){
      return Snackbar.show({
        text: gameWiner,
        backgroundColor: '#f7f7f7',
        textColor: '#ffffff'
      })
    }
    if(gameState[itemNumber] === 'empty'){
      gameState[itemNumber] = isCross ? 'cross' : 'circle'
      setIsCross(!isCross)
    }
    else{
      return Snackbar.show({
        text: 'Already filled!',
        backgroundColor: 'red',
        textColor: '#ffffff'
      })
    }

    checkIsWinner()

  }
  return (
    <SafeAreaView >
      <StatusBar/>
      <View>
        <Text>App</Text>
        {/* <Icons/> */}
      </View>
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
