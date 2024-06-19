import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


export default function iconButton({icon, label, onPress}){
    return(
        <Pressable style = {Styles.iconButton} onPress = {onPress}>
            <MaterialIcons name={icon} size = {24} color = "#FFF"/>
            <Text style ={Styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    )
}



const Styles = StyleSheet.create({

    iconButton:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconButtonLabel:{
        color: "#fff",
        marginTop: 12,
    },
});