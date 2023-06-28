import {FlatList, StyleSheet, Switch, Text, TextInput, View} from "react-native";
import {useState} from "react";
import AvailableColors from '../assets/Colors.json'
import {ColorBox} from "../components/ColorBox";
export const AddColorPalette = () => {
    const [colorPaletteName , setColorPaletteName] = useState("")
    const [chosenColors ,  setChosenColors] = useState<{hexCode : string , colorName : string}[]>([])
    return (
        <View style={[styles.container , styles.flex1]}>
            <View style={[styles.separator]}>
                <Text style={[styles.header]}>Color Palette Name </Text>
                <TextInput value={colorPaletteName} onChangeText={setColorPaletteName} placeholder={"Palette Name.."} style={styles.input} />
            </View>
            <View style={[styles.separator]}>
                <Text style={[styles.header]}>Preview </Text>
                <FlatList horizontal data={chosenColors} renderItem={({item}) => <ColorBox preview colorHex={item.hexCode} textContent={item.colorName}/>} />
            </View>
            <View style={[styles.separator]}>
                <Text style={[styles.header]}>Colors </Text>
                <FlatList data={AvailableColors} renderItem={({item}) =>
                    <View style={{ flexDirection : "row" , justifyContent : "space-between" , alignItems : "center"  , marginBottom : 10}}>
                        <Text>{item.colorName}</Text>
                        <Switch onChange={()=> {
                            const targetColor = chosenColors.find(chosenColor => chosenColor.hexCode === item.hexCode );
                            if(targetColor){
                                setChosenColors(chosenColors.filter(chosenColor => chosenColor.hexCode !== item.hexCode))
                                return
                            }else{
                                setChosenColors([...chosenColors , item])
                            }
                        } } value={!!chosenColors.find(chosenColor => chosenColor.hexCode === item.hexCode )} />
                    </View>
                }/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    flex1: {flex : 1},
    container: {
        backgroundColor: '#fff',
        padding : 20,
    },
    separator : {marginBottom : 10 , borderBottomWidth : 1 , borderBottomColor : 'gray' , paddingVertical : 10},
    input : {
        borderRadius : 10,
        borderWidth : 2,
        borderColor : 'gray',
        padding : 10,
        marginVertical : 5

    },
    header : {
        fontSize : 20,
        fontWeight : "bold",
        marginBottom : 20
    }
})