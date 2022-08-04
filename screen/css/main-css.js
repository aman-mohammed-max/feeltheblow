import Color from '../../assets/color/main-color';
import {StyleSheet} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
export default StyleSheet.create({
  statusBar: {
    height: (getStatusBarHeight())
    },

  topbar: {
    backgroundColor: Color.C3 ,
    height: 65 ,
  },
  text: {
  }

});