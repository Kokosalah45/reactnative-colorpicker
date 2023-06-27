import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {ColorBox} from "./components/ColorBox";

const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
];

export default function App() {
  return (
    <SafeAreaView style={[styles.container , styles.flex1]}>
      <FlatList ListHeaderComponent={() => <Text style={styles.font30}>Solarized</Text>} keyExtractor={item => item.colorName} style={[styles.flex1]} data={COLORS} renderItem={({item}) => <ColorBox colorHex={item.hexCode} textContent={item.colorName}></ColorBox>}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex1: {flex : 1},
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding : 10,
  },
  font30 :{
      paddingVertical : 10,
      fontSize : 30,
      fontWeight : "bold",


  }
});
