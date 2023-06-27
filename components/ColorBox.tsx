import {Text, View , StyleSheet} from "react-native";


interface IProps {
    colorHex : string ,
    textContent : string,
    preview? : boolean
}

function isColorLight(hexColor : string) {
    // Convert hex color code to RGB
    const color = hexColor.replace('#','')

    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4,6), 16);
    // Calculate luminance
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    console.log({luminance})
    // Check if luminance is greater than 0.5
    if (luminance > 0.5) {
        return true; // color is light
    } else {
        return false; // color is dark
    }

}


export const ColorBox = ({colorHex , textContent , preview = false}:IProps) => {
    return (
        <View style={[styles.container , preview && styles.preview , {backgroundColor : colorHex}]}>
            {!preview && <Text style={[styles.font18 , {color : isColorLight(colorHex) ? 'black' : 'white'}]}> {textContent}: {colorHex}</Text>}
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
    },
    preview : {
        height : 50,
        width : 50,
    }
})