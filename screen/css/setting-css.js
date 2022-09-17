import Color from '../../assets/color/main-color';
import {StyleSheet ,  } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { heightPercentageToDP as hp ,  } from 'react-native-responsive-screen';
export default StyleSheet.create({
    statusBar: {
        height: (getStatusBarHeight())
        },

  topbar: {
    backgroundColor: Color.C3 ,
    height: 65 ,
  },

  backbtn: {
  },

  backbtn_icon:{
    marginHorizontal: 6,
    marginVertical: 1
  },

  card: {
    backgroundColor: Color.C3,
    height: 75 ,
    marginHorizontal : 20 ,
    marginVertical : 30 ,
    borderRadius: 12 ,
    padding : 16 ,
    flexDirection : 'row' ,
    justifyContent : 'space-evenly'
  },

  iconv: {
    width: 35 ,
    marginStart: 10,
    marginVertical: 7 , 
  },

  volm: {
    width: 235 ,
    height: 42,
  },
  
  card_2: {
    backgroundColor: Color.C3,
    height: 75 ,
    marginHorizontal : 20 ,
    marginBottom: 30 ,
    borderRadius: 12 ,
    paddingHorizontal: 0 ,
    paddingVertical: 23 ,
    flexDirection : 'row' ,
    justifyContent : 'space-evenly'
  },

  backtxt:{
    fontFamily: "Poppins-Bold", 
    fontSize: 20 ,
    width: 200,
  },

  card_3: {
    backgroundColor: Color.C3,
    height: 75 ,
    marginHorizontal : 20 ,
    marginBottom: 30 ,
    borderRadius: 12 ,
    padding : 16 ,
    paddingTop: 14,
    flexDirection : 'row' ,
    justifyContent : 'flex-start'
  },

  abutxt:{
    fontFamily: "Poppins-Bold", 
    fontSize: 20 ,
    width: 200,
    marginHorizontal: 20,
    marginLeft: 7,
    marginVertical: 9 ,
    textAlign: 'center',
  },
  
  aman: {
    width: 45 ,
    height: 45 ,
    marginLeft: 12 ,
    borderColor: Color.C6 , 
    borderWidth: 2,
    borderRadius: 50 ,
  },

  card_4: {
    backgroundColor: Color.C3,
    height: hp(47) ,
    marginHorizontal : 20 ,
    borderRadius: 12 ,
    padding : 16 ,
    paddingTop: 10 ,
    alignItems : 'center',
  },

  whohd: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    borderBottomColor: Color.C2 ,
    color: Color.C5 ,
    borderBottomWidth: 1 ,
    width: '100%',
    textAlign: 'center',
  },

  blanket: {
    marginTop: 5 ,
    width: 90,
    height: 90,
  },

  blantitle: {
    fontFamily: "Comfortaa-Bold",
    fontSize: 50,
    marginHorizontal: 14
  },

  blanoo: {
    marginTop: 16,
    flexDirection : 'row' ,
    justifyContent : 'flex-start',
    alignItems: 'center',
  },

  blanksoil:{
    marginTop: 17 ,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  blanttext:{
    // backgroundColor: Color.C6 ,
    borderRadius: 6 ,
    textAlign: 'center',
    marginTop: 20,
    padding: 13,
    color: Color.C4 ,
    fontFamily: "Comfortaa-Bold",
    fontSize: 12 ,
  }

});