import {View, Pressable, StyleSheet} from 'react-native';
import MaterialIcons from  '@expo/vector-icons/MaterialIcons';

export default function circleButton({onPress}){
    return(
        <View style = {Style.circleButtonContainer}>
            <Pressable style= {Style.circleButton} onPress = {onPress}>
                <MaterialIcons name='add' size={38} color = "#25292e"></MaterialIcons>
            </Pressable>
        </View>
    )
}

const Style = StyleSheet.create({

    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,
    },

    circleButton: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff'
    }
});