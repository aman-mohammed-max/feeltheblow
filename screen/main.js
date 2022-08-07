import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { Appbar ,  Divider , FAB  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import {name as appName} from '../app.json';
import Slider from '@react-native-community/slider';
import styles from './css/main-css';
import Color from '../assets/color/main-color'

const main = ({navigation}) => {

  const _gotosetings = () => navigation.navigate("setting");

  return (
    <>
    <View style={[styles.statusBar]}>
      <StatusBar translucent backgroundColor={Color.C3} />
    </View>
    
    <Appbar.Header style={styles.topbar}>
        <Appbar.Content color={Color.C5} style={styles.text} title={appName} titleStyle={{ fontFamily: "Pacifico-Regular" ,  color:Color.C5 ,height:37 ,fontSize: 28, paddingTop:15 ,    }} />
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
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
       </View> 

        <Divider style={{ backgroundColor: Color.C2}} />
        <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="poo-storm"/>
       <View>
       <Text  style={styles.card_text}>Storm</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
     </View> 

      <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="wind"/>
       <View>
       <Text   style={styles.card_text}>Wind</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
     </View> 

     <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="water"/>
       <View>
       <Text style={styles.card_text}>Waves</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
     </View> 

     <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="stream"/>
       <View>
       <Text style={styles.card_text}>Stream</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
     </View> 

     <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="dove"/>
       <View>
       <Text style={styles.card_text}>Birds</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
     </View> 

     <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="cloud-moon"/>
       <View>
       <Text style={styles.card_text}>Summer Night</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
     </View> 
    </View>
    </View>    

    {/* row_2 */}

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
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
       </View> 

        <Divider style={{ backgroundColor: Color.C2}} />
        <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="ship"/>
       <View>
       <Text  style={styles.card_text}>Boat</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
     </View> 

      <Divider style={{ backgroundColor: Color.C2}} />
      <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="city"/>
       <View>
       <Text   style={styles.card_text}>City</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1}  minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
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
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
       </View> 

        <Divider style={{ backgroundColor: Color.C2}} />
        <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="fire-alt"/>
       <View>
       <Text  style={styles.card_text}>Fireplace</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
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
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
       </View>
       </View> 

        <Divider style={{ backgroundColor: Color.C2}} />
        <View style={styles.card}>
       <Icon5  style={styles.iconv} size={27} name="align-left"/>
       <View>
       <Text  style={styles.card_text}>White Noise</Text>
       <Slider  style={styles.volm} minimumValue={0} maximumValue={1} minimumTrackTintColor={Color.C5} maximumTrackTintColor={Color.C1} thumbTintColor={Color.C4} />
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
      <View style={styles.add_card}>
       <Icon5  style={styles.icon_add} size={17} name="plus"/>
     </View> 
    </View>
    </View>     
    </ScrollView> 

    <FAB  icon={() => (<Icon5 name="play" size={22} />)}  style={styles.fab} onPress={() => console.log('Pressed')} />

    </>
  );
};



export default main;