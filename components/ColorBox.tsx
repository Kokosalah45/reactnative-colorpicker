import {Text, View , StyleSheet} from "react-native";


interface IProps {
    colorHex : string ,
    textContent : string
}
export const ColorBox = ({colorHex , textContent}:IProps) => {
    return (
        <View style={[styles.container , {backgroundColor : colorHex}]}>
            <Text style={[styles.font18]}> {textContent}: {colorHex}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container : {
        padding : 10,
        marginBottom : 10,
        alignItems : 'center'
    },
    font18 : {
        fontSize : 18,
        fontWeight : "bold",
        color : "white"
    }
})