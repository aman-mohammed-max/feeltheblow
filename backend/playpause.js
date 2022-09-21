import React, {useState} from 'react';
import {birds} from './sound';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../screen/css/main-css';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { FAB } from 'react-native-paper';
import { play , pause } from './sound';

const Fabplay = () => {
    const [playing, setPlaying] = useState();
    const playPause = () => {
      if (birds.isPlaying()) {
        pause();
        setPlaying(false);
        console.log('pued');
      } else {
        setPlaying(true);
        play();
      }
    };
    return (
       <FAB  icon={() => (<Icon5 name={ playing ? 'pause' : 'play' } size={22} style={{marginHorizontal:wp(0.8), width:wp(5)}} />)} animated={false} style={styles.fab} onPress={playPause} />
    );
  };
  export default Fabplay;