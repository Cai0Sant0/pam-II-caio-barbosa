import { StyleSheet, View, Pressable, Text } from "react-native";
import  FontAwesome  from "@expo/vector-icons/FontAwesome";

export default function Button({label,theme, onPress}){
    if(theme == "primario"){
        return(
            <View style = {[Styles.botaoContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18}]}>
                <Pressable style = {[Styles.botao, { backgroundColor: "#fff"}]} onPress={onPress}>
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={Styles.iconeBotao}/>
                    <Text style = {[Styles.labelBotao, {color: "#25292e"}]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return(
        <View style = {Styles.botaoContainer}>
            <Pressable style = {Styles.botao} onPress={()=>{alert('Você apertou o botão!')}}>
                <Text style = {Styles.labelBotao}>{label}</Text>
            </Pressable>
        </View>
    );
    
}

const Styles = StyleSheet.create({
    botaoContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },

    botao: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    iconeBotao: {
        paddingRight: 8,
    },

    labelBotao: {
        color : '#fff',
        fontSize: 16,
    }
});