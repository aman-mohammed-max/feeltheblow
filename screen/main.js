import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Vibration} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Appbar ,  Divider , FAB ,  TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Snackbar from 'react-native-snackbar';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import {name as appName} from '../app.json';
import Slider from '@react-native-community/slider';
import styles from './css/main-css';
import Color from '../assets/color/main-color' ;
import { ra , sto , win , was , str , bir , summ , tra , boa , cit , play , coff, fire , pink , whit ,} from '../backend/playbutton';

const main = ({navigation}) => {

  const _gotosetings = () => navigation.navigate("setting");
  
  return (
    <>
    <View style={[styles.statusBar]}>
      <StatusBar translucent backgroundColor={Color.C3} />
    </View>
    
    <Appbar.Header style={styles.topbar}>
        <Appbar.Content color={Color.C5} style={styles.text} title={appName} titleStyle={{ fontFamily: "Pacifico-Regular" ,  color:Color.C5 ,height:hp(4.5) ,fontSize: RFPercentage(4), paddingTop:hp(2) , }} />
        <Appbar.Action color={Color.C5} icon={() => (<Octicons name="gear" size={23} />)} onPress={_gotosetings} />
      </Appbar.Header>

      <ScrollView>

    <View style={styles.container }>
      <View style={styles.row1_box}>
      <Icon5  style={styles.icon_b} size={19} name="leaf"/>
      <Text style={{fontFamily: "Poppins-Bold", }}>Nature</Text>
    </View>
    <View style={styles.row1}>

      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="cloud-showers-heavy"/>
       <View>
       <Text style={styles.card_text}>Rain</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4}  onValueChange={ra} />
       </View>
       </View> 

        <Divider style={{ backgroundColor: Color.C2}} />
        <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="poo-storm"/>
       <View>
       <Text  style={styles.card_text}>Storm</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={sto} />
       </View>
     </View> 

      <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="wind"/>
       <View>
       <Text   style={styles.card_text}>Wind</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={win} />
       </View>
     </View> 

     <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="water"/>
       <View>
       <Text style={styles.card_text}>Waves</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4}  onValueChange={was}/>
       </View>
     </View> 

     <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="stream"/>
       <View>
       <Text style={styles.card_text}>Stream</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4}  onValueChange={str}/>
       </View>
     </View> 

     <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="dove"/>
       <View>
       <Text style={styles.card_text}>Birds</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={bir}/>
       </View>
     </View> 

     <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="cloud-moon"/>
       <View>
       <Text style={styles.card_text}>Summer Night</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={summ} />
       </View>
     </View> 
    </View>
    </View>    

    <View style={styles.container}>
      <View style={styles.row1_box}>
      <Icon5  style={styles.icon_b} size={19} name="plane-departure"/>
      <Text style={{fontFamily: "Poppins-Bold", }}>Travel</Text>
    </View>
    <View style={styles.row1}>

      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="train"/>
       <View>
       <Text style={styles.card_text}>Train</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={tra}/>
       </View>
       </View> 

        <Divider style={{ backgroundColor: Color.C2}} />
        <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="ship"/>
       <View>
       <Text  style={styles.card_text}>Boat</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={boa}/>
       </View>
     </View> 

      <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="city"/>
       <View>
       <Text   style={styles.card_text}>City</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={cit}/>
       </View>
     </View> 
    </View>
    </View>   

    <View style={styles.container}>
      <View style={styles.row1_box}>
      <Icon5  style={styles.icon_b} size={19} name="eaf"/>
      <Text style={{fontFamily: "Poppins-Bold", }}>Interiors</Text>
    </View>
    <View style={styles.row1}>

      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="mug-hot"/>
       <View>
       <Text style={styles.card_text}>Coffee Shop</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={coff}/>
       </View>
       </View> 

        <Divider style={{ backgroundColor: Color.C2}} />
        <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="fire-alt"/>
       <View>
       <Text  style={styles.card_text}>Fireplace</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={fire}/>
       </View>
     </View> 
    </View>
    </View>    

    <View style={styles.container}>
      <View style={styles.row1_box}>
      <Icon5  style={styles.icon_b} size={19} name="wave-square"/>
      <Text style={{fontFamily: "Poppins-Bold", }}>Noice</Text>
    </View>
    <View style={styles.row1}>

      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="align-center"/>
       <View>
       <Text style={styles.card_text}>Pink Noise</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={pink}/>
       </View>
       </View> 

        <Divider style={{ backgroundColor: Color.C2}} />
        <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="align-left"/>
       <View>
       <Text  style={styles.card_text}>White Noise</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} onValueChange={whit}/>
       </View>
     </View> 
    </View>
    </View>   

     <View style={styles.container}>
        <View style={styles.row1_box}>
          <Icon5  style={styles.icon_b} size={19} name="user-edit"/>
          <Text style={{fontFamily: "Poppins-Bold", }}>Custom</Text>
        </View>
        <View style={styles.add}>
          <TouchableRipple borderless={true} style={{borderRadius: 12 , }} onPress={() => {Snackbar.show({ text: 'it will release next version ', duration: Snackbar.LENGTH_SHORT,fontFamily:"Comfortaa-Bold" }); Vibration.vibrate(10);}} rippleColor="rgba(0, 0, 0, .32)">
           <View style={styles.add_card}>
            <Icon5  style={styles.icon_add} size={17} name="plus"/>
           </View> 
         </TouchableRipple>
        </View>
    </View>     
    </ScrollView> 

    <FAB  icon={() => (<Icon5 name="play" size={22} style={{marginHorizontal:wp(0.8), width:wp(5)}} />)} animated={false} style={styles.fab} onPress={() => play()} />

    </>
  );
};


  



export default main;