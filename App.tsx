import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ColorBox} from "./components/ColorBox";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ColorBox colorCode="" textContent=""/>
      <ColorBox colorCode="" textContent=""/>
      <ColorBox colorCode="" textContent=""/>
      <ColorBox colorCode="" textContent=""/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
