import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {useRef} from "react";
import {ColorPaletteScreen} from "./screens/ColorPalette";
import {HomeScreen} from "./screens/Home";

export default function App() {
  const Stack = useRef(createStackNavigator()).current
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="ColorPalette" component={ColorPaletteScreen} options={({ route }) => ({ title: "" })} />
          </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  flex1: {flex : 1},
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding : 10,
  },

});
