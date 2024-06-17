import { StyleSheet, Image } from "react-native";

export default function ImageViewer({imagem, imagemSelecionada}){

    const imageSource = imagemSelecionada ? {uri: imagemSelecionada} : imagem;

    return(
        <Image source={imageSource} style = {Styles.image} />
    );
}

const Styles = StyleSheet.create({

        image : {
            width: 320,
            height: 440,
            borderRadius: 18,
        }
});