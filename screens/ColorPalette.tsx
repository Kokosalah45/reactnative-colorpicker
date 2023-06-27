import {SafeAreaView} from "react-native-safe-area-context";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {ColorBox} from "../components/ColorBox";
import COLORS from '../assets/Colors.json'
import {StackHeaderProps} from '@react-navigation/stack';



export const ColorPaletteScreen = ({navigation , route} : StackHeaderProps) => {
    const {title} = route.params as {title : string};
    const themeColors = COLORS.data.find(el => el.title === title)

    return (
        <View style={[styles.container , styles.flex1]}>
            <FlatList ListHeaderComponent={() => <Text style={styles.font30}>{title.replace('_' , ' ')}</Text>} keyExtractor={item => item.colorName} style={[styles.flex1]} data={themeColors?.data} renderItem={({item}) => <ColorBox colorHex={item.hexCode} textContent={item.colorName}></ColorBox>}></FlatList>
        </View>
    );
};

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
        textTransform : 'capitalize'

    }
});
