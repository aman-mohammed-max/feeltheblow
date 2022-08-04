import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { Appbar , Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import {name as appName} from '../app.json';
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
        <Appbar.Content color={Color.C5} style={styles.text} title={appName} titleStyle={{ fontFamily: "Pacifico-Regular" }} />
        <Appbar.Action color={Color.C5} icon={() => (<Octicons name="gear" size={23} />)} onPress={_gotosetings} />
      </Appbar.Header>
      </>
  );
};



export default main;