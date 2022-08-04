import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import main from './screen/main';
import setting from './screen/setting';
import 'react-native-gesture-handler';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Color from './assets/color/main-color'


const Stack = createNativeStackNavigator();


const App = () => {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: Color.MAIN
        },
      };

    return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='main'>
         <Stack.Screen name='main' component={main} options={{ headerShown: false }}/>
         <Stack.Screen name='setting' component={setting} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>   
 );
};

export default App;