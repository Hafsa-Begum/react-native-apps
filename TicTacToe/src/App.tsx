import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icons from './Components/Icon';
import Snackbar from 'react-native-snackbar'
import Sound from 'react-native-sound';


function App(): React.JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWiner, setGameWinner] = useState('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));
  const [sound, setSound] = useState(null);

  // Function to play sound
  const playSound = () => {
    const newSound = new Sound(require('./assets/clap-beat.mp3'), (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      newSound.play((success:any) => {
        if (!success) {
          console.log('Sound did not play successfully');
        }
        // Release the sound instance after playback finishes
        newSound.release();
        setSound(null);
      });
    });
    setSound(newSound);
  };

   // Function to stop sound
   const stopSound = () => {
    if (sound) {
      sound.stop(() => {
        console.log('Sound stopped');
        sound.release(); // Release sound resources when stopped
        setSound(null);  // Clear sound instance from state
      });
    }
  };
  
  const reloadGame=()=>{
    setIsCross(false);
    setGameWinner('')
    setGameState(new Array(9).fill('empty', 0, 9))
    stopSound()
  }
  const checkIsWinner = () =>{
    if(gameState[0] != 'empty' && gameState[0] == gameState[1] && gameState[1] == gameState[2]){
      setGameWinner(`${gameState[0]} won the game...🥳`)
      playSound();
    }
    else if(gameState[3] != 'empty' && gameState[3] == gameState[4] && gameState[4] == gameState[5]){
      setGameWinner(`${gameState[3]} won the game...🥳`)
      playSound();
    }
    else if(gameState[6] != 'empty' && gameState[6] == gameState[7] && gameState[7] == gameState[8]){
      setGameWinner(`${gameState[6]} won the game...🥳`)
      playSound();
    }
    //for column
    else if(gameState[0] != 'empty' && gameState[0] == gameState[3] && gameState[3] == gameState[6]){
      setGameWinner(`${gameState[0]} won the game...🥳`)
      playSound();
    }
    else if(gameState[1] != 'empty' && gameState[1] == gameState[4] && gameState[4] == gameState[7]){
      setGameWinner(`${gameState[1]} won the game...🥳`)
      playSound();
    }
    else if(gameState[2] != 'empty' && gameState[2] == gameState[5] && gameState[5] == gameState[8]){
      setGameWinner(`${gameState[2]} won the game...🥳`)
      playSound();
    }
    // for diagonal
    else if(gameState[0] != 'empty' && gameState[0] == gameState[4] && gameState[4] == gameState[8]){
      setGameWinner(`${gameState[0]} won the game...🥳`)
      playSound();
    }
    else if(gameState[6] != 'empty' && gameState[6] == gameState[4] && gameState[4] == gameState[2]){
      setGameWinner(`${gameState[6]} won the game...🥳`)
      playSound();
    }
    else if(!gameState.includes('empty', 0)){
      setGameWinner('Draw Game...🥂')
    }
  }

  const onChangeWinner = (itemNumber: number) =>{
    if(gameWiner){
      return Snackbar.show({
        text: gameWiner,
        backgroundColor: '#5D12D2',
        textColor: '#fff'
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
    <SafeAreaView style={styles.safeArea}>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>
            Tic Tac Toe!!!
          </Text>
        </View>
        <View>
          {
          gameWiner ? (
            <View style={styles.gameWinner}>
              <Text style={styles.gameWinnerText}>{gameWiner}</Text>
            </View>
          ) : (
          <View style={[styles.player,isCross ? styles.playerX : styles.player0]}>
            <Text style={styles.playerText}>Player {isCross ? 'X' : '0'}'s Turn</Text>
          </View>)
          }
        </View>
        <View style={styles.gameZone}>
          <FlatList
          numColumns={3}
          data={gameState}
          renderItem={({item, index})=>(
            <Pressable 
            style={styles.iconBtn}
            onPress={()=>onChangeWinner(index)}
            key={index}>
              <Icons name={item}/>
            </Pressable>
          )}
          />
        </View>
        <View>
          <Pressable
          style={styles.startBtn}
          onPress={reloadGame}
          >
            <Text style={styles.startBtnText}>
            {gameWiner ? 'Reload Game' : 'Start Game'}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#87A2FF',
  },
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: '#87A2FF',
  },
  titleBox:{
    backgroundColor: '#fff',
    marginHorizontal:50,
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FF78C4',
    textAlign: 'center',
  },
  gameWinner: {
    backgroundColor: '#5D12D2',
    marginTop: 80,
    marginBottom: 30,
    marginHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 8,
  },
  gameWinnerText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  player: {
    marginTop: 80,
    marginBottom: 30,
    marginHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 8,
  },
  playerX: {
    backgroundColor: '#9B4444',
  },
  player0: {
    backgroundColor: '#FF78C4',
  },
  playerText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  gameZone: {
    marginHorizontal: 50,
    backgroundColor: '#1F4172',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  iconBtn: {
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    margin: 8,
  },
  startBtn: {
    marginVertical: 20,
    marginHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#F7418F', 
  },
  startBtnText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
});

export default App;
