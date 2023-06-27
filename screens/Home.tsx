import {FlatList, Pressable, Text, View , StyleSheet} from "react-native";
import { StackHeaderProps } from '@react-navigation/stack';
import COLORS from '../assets/Colors.json'
import {ColorBox} from "../components/ColorBox";
export const HomeScreen = ({ navigation } : StackHeaderProps) => {
    return (
        <View style={[styles.container , styles.flex1]}>
            <FlatList
                style={styles.flex1}
                data={COLORS.data}
                renderItem={({item}) => (
                    <Pressable
                        style={({ pressed }) => [
                            { opacity: pressed ? 0.5 : 1.0 }
                        ]} onPress={() => navigation.push("ColorPalette" , {title : item.title})}
                   >
                        <Text style={[styles.previewHeader]}>{item.title.replace('_' , ' ')}</Text>
                        <FlatList contentContainerStyle={{ gap : 10 }} horizontal data={item.data.slice(0,5)} renderItem={({item}) => <ColorBox colorHex={item.hexCode} preview textContent={item.colorName} /> } />
                    </Pressable>
                )}
            >
            </FlatList>

        </View>
    );
};


const styles = StyleSheet.create({
    previewHeader : {
        fontSize : 20,
        fontWeight : "bold",
        paddingVertical : 10,
        textTransform : "capitalize"
    },
    flex1: {flex : 1},
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding : 10,
    },
})


