// src/services/PlaybackService.ts
import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player';
import { audioPlayList } from '../contants';

export const setupPlayer = async() =>{
    let isSetup = false
    try {
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup = true
    }
    finally{
        return isSetup;
    }
}

export const addTrack =async function (){
    await TrackPlayer.add(audioPlayList)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)

}

export const PlaybackService = async function() {

    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

    TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext());

    TrackPlayer.addEventListener(Event.RemotePrevious, () => TrackPlayer.skipToPrevious());

    

};