import {Text, View , StyleSheet} from "react-native";


interface IProps {
    colorCode : string ,
    textContent : string
}
export const ColorBox = ({colorCode , textContent}:IProps) => {
    return (
        <View style={[styles.container , {backgroundColor : colorCode}]}>
            <Text>{textContent}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container : {
        padding : 10,
        marginBottom : 10,
        alignItems : 'center'
    }
})