import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Linking , Text, View, Image , Vibration ,} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {Appbar , Switch ,  TouchableRipple , Button ,} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './css/setting-css';
import Color from '../assets/color/main-color'
import Snackbar from 'react-native-snackbar';
import Slider from '@react-native-community/slider';
import SystemSetting from 'react-native-system-setting';




const setting = ({navigation}) => {
  state = {
    volume: 0
  }
 
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(notworking);
  const notworking = () => {Snackbar.show({ text: 'its not working !!', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold" }); Vibration.vibrate(100, 0, 100, 0);}

    console.info( 'vol volmin ' + SystemSetting.getVolume().then())

      
  //copy to Clipboard
  const FlathubToClipboard = () => {
    Clipboard.setString('https://flathub.org/apps/details/com.rafaelmardojai.Blanket');
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold" });
  }

  const GithubToClipboard = () => {
    Clipboard.setString('https://github.com/rafaelmardojai/blanket');
    Vibration.vibrate(20);
    Snackbar.show({ text: 'Copy To Clipboard', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold"});
  }

  return (
    <>
    <View style={[styles.statusBar]}>
      <StatusBar translucent backgroundColor={Color.MAIN}  />
    </View>
    
    <Appbar.Header mode='center-aligned' style={styles.topbar}>
      <Appbar.Action  color={Color.C5} icon={() => (<Octicons name="chevron-left" style={styles.backbtn_icon} size={23} />)} style={styles.backbtn} onPress={() =>{ navigation.navigate("main");}} />
     <Appbar.Content  style={styles.toptext} title="Settings" titleStyle={{ fontFamily: "Poppins-Bold",  color:Color.C5 ,height:35 ,fontSize: 28 ,paddingVertical:6 , marginTop:9 , marginLeft:3 }} /> 
    </Appbar.Header>

      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="volume-up"/>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={(Value) => SystemSetting.setVolume(Value)}/>
     </View>    

     <View style={styles.card_2}>
      <Text style={styles.backtxt}>run in background</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Color.C2} />
     </View>   
     
     <View>
     <TouchableRipple borderless={true} style={styles.card_3} onPress={ ()=>{ Linking.openURL('https://amanmohammed.in.net/')}} rippleColor={Color.C2} >
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
    </>
  );
};



// //StyleSheet on here 
// const styles = StyleSheet.create({

// });

export default setting;