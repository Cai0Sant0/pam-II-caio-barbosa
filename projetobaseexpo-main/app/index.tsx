import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const PorImagem = require('../assets/images/background-image.png');

import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function App() {

  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const pickImageAsync = async ()=>{
    let resultado = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if(!resultado.canceled){
      setImagemSelecionada(resultado.assets[0].uri);
    }
    else{
      alert("Você não selecionou nehnuma imagem");
    }
  }


  return (
    <View style={styles.container}>
       <View style = {styles.imageContainer}>
          <ImageViewer imagem={PorImagem} imagemSelecionada = {imagemSelecionada}/>
       </View>
       <View style = {styles.footerContainer}>
            <Button theme={"primario"} label={"Escolha uma foto"} onPress={pickImageAsync}/>
            <Button label={"Use essa foto"}/>
       </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  }
});
