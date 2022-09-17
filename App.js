import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Main from './screen/main';
import Setting from './screen/setting';
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
      <Stack.Navigator initialRouteName='Main'>
         <Stack.Screen name='Main' component={Main} options={{ headerShown: false }}/>
         <Stack.Screen name='Setting' component={Setting} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>   
 );
};

export default App;