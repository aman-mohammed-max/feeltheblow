import React ,{ useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Linking , Text, View, Image , Vibration ,} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Appbar , Switch ,  TouchableRipple , Button ,  IconButton, MD3Colors } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './css/setting-css';
import Color from '../assets/color/main-color'
import Snackbar from 'react-native-snackbar';
import Slider from '@react-native-community/slider';
import SystemSetting from 'react-native-system-setting';
import { BottomSheet } from 'react-native-elements';
import {bio , name , web , github , instagram , twitter , reddit , bmc} from './aboutme.json';


const Setting = ({navigation}) => {

  const [isVisible, setIsVisible] = useState(false);

  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const onToggleSwitch = () => setIsSwitchOn(notworking);
  const notworking = () => {Snackbar.show({ text: 'its not working !!', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold" }); Vibration.vibrate(100, 0, 100, 0); setIsSwitchOn(true)};

  const [vlm , setvlm ]  = useState(0);

  const volumeListener = SystemSetting.addVolumeListener((data) => {
  const v = data.value;
  setvlm(v)
});

SystemSetting.getVolume().then((volume)=>{
  setvlm(volume)
})

function getvlm (getvlm) {
  SystemSetting.setVolume(getvlm);
  SystemSetting.removeVolumeListener(volumeListener);
};

console.log(vlm);


  //copy to Clipboard
  function FlathubToClipboard() {
    Clipboard.setString('https://flathub.org/apps/details/com.rafaelmardojai.Blanket');
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT, fontFamily: "Comfortaa-Bold" });
  }

  const GithubToClipboard = () => {
    Clipboard.setString('https://github.com/rafaelmardojai/blanket');
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold"});
  }

  //copy to Clipboard for Aman
  const webToClipboard = () => {
    Clipboard.setString(web);
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold"});
  }

  const AmanGithubToClipboard = () => {
    Clipboard.setString(github);
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold"});
  }

  const instagramToClipboard = () => {
    Clipboard.setString(instagram);
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold"});
  }

  const twitterToClipboard = () => {
    Clipboard.setString(twitter);
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold"});
  }

  const redditToClipboard = () => {
    Clipboard.setString(reddit);
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold"});
  }

  const BMCToClipboard = () => {
    Clipboard.setString(bmc);
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold"});
  }

  
  return (
    <>
    <View style={[styles.statusBar]}>
      <StatusBar translucent backgroundColor={Color.MAIN}  />
    </View>
    
    <Appbar.Header mode='center-aligned' style={styles.topbar}>
      <Appbar.Action  color={Color.C5} icon={() => (<Octicons name="chevron-left" style={styles.backbtn_icon} size={23} />)} style={styles.backbtn} onPress={() =>{ navigation.navigate("Main");}} />
     <Appbar.Content  style={styles.toptext} title="Settings" titleStyle={{ fontFamily: "Poppins-Bold",  color:Color.C5 ,height:35 ,fontSize: RFPercentage(3.7) ,paddingVertical:6 , marginTop:9 , marginLeft:3 }} /> 
    </Appbar.Header>

      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="volume-up"/>
         <Slider style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} value={vlm} onValueChange={getvlm}/>     
     </View>    

     <View style={styles.card_2}>
      <Text style={styles.backtxt}>Run in background</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Color.C2} />
     </View>   
     
     <View>
     <TouchableRipple borderless={true} style={styles.card_3} onPress={  () => setIsVisible(true)} rippleColor={Color.C2}>
     <>
     <Image style={styles.aman} source={require('../assets/image/png/Aman/Aman.png')} />
     <Text style={styles.abutxt}>About developer</Text>
     </>  
     </TouchableRipple>
     </View>

     <View style={styles.card_4}>
      <Text style={styles.whohd}>EVOLVED FROM</Text>
      <View style={styles.blanoo}>
     <Image style={styles.blanket} source={require('../assets/image/png/blanket/blanket.png')} />
     <Text style={styles.blantitle}>Blanket</Text>
     </View>
     <Text style={styles.blanttext}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet tellus aliquam, molestie lectus vitae, semper nisl. Aliquam at diam sit amet risus aliquet faucibus. Sed quis ultrices leo. Cras malesuada faucibus velit eu tempus. Nulla non ex diam. Donec gravida venenatis purus eget lobortis. Ut suscipit sollicitudin ultrices. Vivamus laoreet ipsum at convallis finibus. Nunc sodales varius nunc, 
      </Text>
      <View style={styles.blanksoil}> 
     <Button textColor={Color.C5} buttonColor={Color.C6} labelStyle={ {fontFamily: "Poppins-Regular", } } mode="contained-tonal" onPress={ ()=>{ Linking.openURL('https://github.com/rafaelmardojai/blanket')}} onLongPress={() => GithubToClipboard()} icon={() => (<Icon name="github-alt" style={{color:Color.C5}}  size={18} />)} >Github</Button>
     <Button textColor={Color.C5} buttonColor={Color.C6} labelStyle={ {fontFamily: "Poppins-Regular"} } mode="contained-tonal" onPress={ ()=>{ Linking.openURL('https://flathub.org/apps/details/com.rafaelmardojai.Blanket')}} onLongPress={() => FlathubToClipboard()} icon={() => (<Image style={{height:18 , width: 18 , scaleX:1.5, scaleY:1.5}} source={require('../assets/image/png/flathub/flathub.png')} />)} >Flathub</Button>
     </View>
     </View> 

     <BottomSheet isVisible={isVisible} containerStyle={{ backgroundColor: 'rgba(0.25, 0.15, 0, 0.1)' , }}>
       <View style={{backgroundColor:Color.C3 , alignItems: 'center', height: hp(45) , marginHorizontal: wp(1) , borderTopRightRadius: 18, borderTopLeftRadius: 18  , paddingVertical: hp(1.6)}} >

        <View style={{backgroundColor: Color.C6 , width: wp(93), height: hp(13.3) , borderRadius: 12 , paddingHorizontal:wp(2) , flexDirection : 'row' , alignItems: 'center' , justifyContent : 'space-around'}}>
        <Image style={{borderRadius:7 , width: 95 , height: 95}} source={require('../assets/image/png/Aman/mecode.png')} />
         <Text style={{height: 95 , width: wp(64.6) , paddingHorizontal: wp(6.4) , bottom: hp(0.5),fontFamily:"Bangers-Regular" , fontSize: RFPercentage(4.8), textAlignVertical: 'center'}}>{name}</Text>
        </View>

        <View style={{  width: wp(93), height: hp(2) , paddingHorizontal:wp(5) , paddingVertical: hp(4.4),  flexDirection : 'row' , alignItems: 'center' , justifyContent : 'space-around'}}>
        <IconButton icon={() => (<Icon5  name="link" size={15} />)} mode='contained' containerColor={Color.C6} iconColor={Color.C5} size={20} onPress={ ()=>{ Linking.openURL(web)}} onLongPress={() => webToClipboard()}/>
        <IconButton icon={() => (<Icon name="github-alt" size={19} />)} mode='contained' containerColor={Color.C6} iconColor={Color.C5} size={20} onPress={ ()=>{ Linking.openURL(github)}} onLongPress={() => AmanGithubToClipboard()}/>
        <IconButton icon={() => (<Icon name="instagram" size={19} />)} mode='contained' containerColor={Color.C6} iconColor={Color.C5} size={20} onPress={ ()=>{ Linking.openURL(instagram)}} onLongPress={() => instagramToClipboard()}/>
        <IconButton icon={() => (<Icon name="twitter" size={21} />)} mode='contained' containerColor={Color.C6} iconColor={Color.C5} size={20} onPress={ ()=>{ Linking.openURL(twitter)}} onLongPress={() => twitterToClipboard()}/>
        <IconButton icon={() => (<Icon name="reddit" size={21} />)} mode='contained' containerColor={Color.C6} iconColor={Color.C5} size={20} onPress={ ()=>{ Linking.openURL(reddit)}} onLongPress={() => redditToClipboard()}/>
        <IconButton icon={() => (<Icon5 name="dollar-sign" size={19} />)} mode='contained' containerColor={Color.C6} iconColor={Color.C5} size={20} onPress={ ()=>{ Linking.openURL(bmc)}} onLongPress={() => BMCToClipboard()}/>
        </View>

        <View style={{ width: wp(93), height: hp(13,8) , paddingHorizontal:wp(3) ,  alignItems: 'center' , justifyContent : 'space-around'}}>
          <Text style={{color: Color.C4 , textAlign: 'center' , fontFamily: "Comfortaa-Bold" , fontSize: RFPercentage(1.7) , margin:0 }}>{bio}</Text>
        </View>

        <TouchableRipple borderless={true} style={{ backgroundColor:'#cc4455bb' , height: hp(3.8), width: wp(87),  position: 'absolute', bottom: hp(1.4) , borderRadius: 8 , alignItems: 'center' , justifyContent : 'space-around'}}  onPress={ () => setIsVisible(false)} rippleColor={Color.C2}>
          <View><Text style={{color: 'ccccccbb' , fontFamily: "Poppins-Regular" , top: hp(0.15)}}> Close </Text></View>
          </TouchableRipple>

       </View>   
     </BottomSheet>
    </>
  );
};




// //StyleSheet on here 
// const styles = StyleSheet.create({

// });

export default Setting;