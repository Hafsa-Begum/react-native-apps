/**
 * @format
 */
// AppRegistry.registerComponent(...);
import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './src/App';
import { PlaybackService } from './src/services/musicPlaybackService';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
