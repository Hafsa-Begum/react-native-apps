import {Track} from 'react-native-track-player';

export const audioPlayList: Track[] = [
    {
        id: 1,
        title: 'Ya Nabi Salam Alayka',
        artist: 'Maher Zain',
        album: 'Thank You Allah',
        artwork: 'https://example.com/artwork/ya-nabi-salam-alayka.jpg',
        url: require('./assets/audio/one.mp3'),
      },
      {
        id: 2,
        title: 'Mawlaya Salli Wa Sallim',
        artist: 'Hafiz Ahmed',
        album: 'Mawlid',
        artwork: 'https://example.com/artwork/mawlaya-salli.jpg',
        url: require('./assets/audio/two.mp3'),
      },
      {
        id: 3,
        title: 'Assalamu Alaika',
        artist: 'Zain Bhikha',
        album: 'The Journey',
        artwork: 'https://example.com/artwork/assalamu-alayka.jpg',
        url: require('./assets/audio/three.mp3'),
      },
      {
        id: 4,
        title: 'Tala Al Badru Alayna',
        artist: 'Various Artists',
        album: 'Islamic Songs',
        artwork: 'https://example.com/artwork/tala-al-badru.jpg',
        url: require('./assets/audio/four.mp3'),
      },
      {
        id: 5,
        title: 'SubhanAllah',
        artist: 'Sami Yusuf',
        album: 'My Ummah',
        artwork: 'https://example.com/artwork/subhanallah.jpg',
        url: require('./assets/audio/five.mp3'),
      },
      {
        id: 6,
        title: 'Hasbi Rabbi',
        artist: 'Sami Yusuf',
        album: 'My Ummah',
        artwork: 'https://example.com/artwork/hasbi-rabbi.jpg',
        url: require('./assets/audio/six.mp3'),
      },
]