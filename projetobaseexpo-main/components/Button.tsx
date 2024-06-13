import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({label}){
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