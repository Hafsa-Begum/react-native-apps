import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MusicPlayer from './screens/MusicPlayer';
import { addTrack, setupPlayer } from './services/musicPlaybackService';

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const setup = async() =>{
    let isSetup  = await setupPlayer()
    if(isSetup){
      await addTrack()
    }
    setIsPlayerReady(isSetup)
  }

  useEffect(()=>{
    setup();
  },[])

  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView>
      <StatusBar/>
     <View>
        <MusicPlayer/>
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
