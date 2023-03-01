import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import AddShop from './src/screens/AddShop';

import Home from './src/screens/Home';
import Info from './src/screens/Info';
import QLShop from './src/screens/QLShop';




const Stack = createNativeStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Info' component={Info}/>
        <Stack.Screen name='QLShop' component={QLShop}/>
        <Stack.Screen name='AddShop' component={AddShop}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;




