import Color from '../../assets/color/main-color';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
export default StyleSheet.create({
  statusBar: {
    height: (getStatusBarHeight())
    },

  topbar: {
    backgroundColor: Color.C3 ,
    marginLeft: wp(-11)
  },

  container: {
    marginVertical: 10 ,
  },

  //row 1 Start 
  row1_box:{
    marginHorizontal : 20 ,
    flexDirection : 'row' ,
    alignItems: 'center' ,
    marginBottom: 2
  },

  icon_b: {
    width: 35 ,
    marginStart: 10,
    marginVertical: 7 , 
  },

  row1 :{
    marginHorizontal : 20 ,
    borderRadius: 12 ,
    backgroundColor: Color.C3,
  },

  card: {
    backgroundColor: Color.C3,
    height: 75 ,
    borderRadius: 12 ,
    padding : 16 ,
    flexDirection : 'row' ,
    justifyContent : 'space-evenly'
  },

  card_text: {
    fontFamily: "Poppins-Regular",
    marginHorizontal: 9 ,
    fontSize: 11
  },

  iconv: {
    width: 35 ,
    marginStart: 10,
    marginVertical: 7 , 
  },

  volm: {
    width: 270 ,
    height: 20,
  },

  add :{
    marginHorizontal : 20 ,
    borderRadius: 12 ,
    marginBottom: 20 ,
  },

  add_card: {
    height: 40 ,
    borderRadius: 12 ,
    padding : 10 ,
    flexDirection : 'row' ,
    justifyContent : 'space-evenly',
    backgroundColor: Color.C3
  },

  iconv: {
    width: 35 ,
    marginStart: 10,
    marginVertical: 7 , 
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Color.C6,
  },


});