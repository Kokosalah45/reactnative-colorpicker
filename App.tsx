import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useRef} from "react";
import {ColorPaletteScreen} from "./screens/ColorPalette";
import {HomeScreen} from "./screens/Home";
import {AddColorPalette} from "./screens/AddColorPalette";

export default function App() {
  const RootStack = useRef(createStackNavigator()).current
  return (
      <NavigationContainer>
          <RootStack.Navigator>
              <RootStack.Group>
                  <RootStack.Screen  options={{ headerShown: false }} name="Main"  component={MainStack} />
              </RootStack.Group>
              <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                  <RootStack.Screen name="addColorPaletteModal" component={AddColorPalette} options={()=> ({title : "Add Color Palette"})} />
              </RootStack.Group>
          </RootStack.Navigator>
      </NavigationContainer>

  );
}

const MainStack = () =>{
    const MainStack = useRef(createStackNavigator()).current

    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="ColorPalette" component={ColorPaletteScreen} options={({ route }) => ({ title: "" })} />
        </MainStack.Navigator>
    )
}



