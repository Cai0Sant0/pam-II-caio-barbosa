import { StyleSheet, Image } from "react-native";

export default function ImageViewer({imagem}){
    return(
        <Image source={imagem} style = {Styles.image} />
    );
}

const Styles = StyleSheet.create({

        image : {
            width: 320,
            height: 440,
            borderRadius: 18,
        }
});