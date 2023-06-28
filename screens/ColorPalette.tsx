import {FlatList, StyleSheet, Text, View} from "react-native";
import {ColorBox} from "../components/ColorBox";
import {StackHeaderProps} from '@react-navigation/stack';
import useGetColorThemes from "../hooks/useGetColorThemes";



export const ColorPaletteScreen = ({navigation , route} : StackHeaderProps) => {

    const {id} = route.params as {id? : string};
    const {colorThemes , setColorThemes} = useGetColorThemes(id)
    return (
        <View style={[styles.container , styles.flex1]}>
            <FlatList ListHeaderComponent={() => <Text style={styles.font30}>{!Array.isArray(colorThemes) && colorThemes.paletteName}</Text>} keyExtractor={item => item.colorName} style={[styles.flex1]} data={!Array.isArray(colorThemes) ? colorThemes.colors : []} renderItem={({item}) => <ColorBox colorHex={item.hexCode} textContent={item.colorName}></ColorBox>}></FlatList>
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
