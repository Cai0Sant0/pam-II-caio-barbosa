import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const PorImagem = require('../assets/images/background-image.png');

import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import CircleButton from '../components/circleButton';
import IconButton from '../components/iconButton';
import EmojiPicker from "../components/emojiPicker";
import EmojiList from "../components/emojiList";
import EmojiSticker from "../components/emojiSticker";

export default function App() {

  const [pickedEmoji, setPickedEmoji] = useState(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [showAppOptions, setShowAppOptions] = useState(false);

  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const onReset = () =>{
    setShowAppOptions(false);
  };

  const onAddSticker = () =>{
    setIsModalVisible(true)
  }

  const onModalClose = () =>{
    setIsModalVisible(false);
  }

  const onSaveImageAsync = async () => {
    
  }

  const pickImageAsync = async ()=>{
    let resultado = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if(!resultado.canceled){
      setImagemSelecionada(resultado.assets[0].uri);
      setShowAppOptions(true);
    }
    else{
      alert("Você não selecionou nehnuma imagem");
    }
  }


  return (
    <GestureHandlerRootView style={styles.container}>
       <View style = {styles.imageContainer}>
          <ImageViewer imagem={PorImagem} imagemSelecionada = {imagemSelecionada}/>
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource = {pickedEmoji}/>}
          <EmojiPicker isVisible={isModalVisible} onClose = {onModalClose}>
              <EmojiList onSelect={setPickedEmoji} onCloseModal = {onModalClose}/>
          </EmojiPicker>
      </View>
          {showAppOptions ? (
            <View style = {styles.optionsContainer}>
              <View style = {styles.optionsRow}>
                  <IconButton icon= "refresh" label= "Resetar" onPress={onReset}></IconButton>
                   <CircleButton onPress={onAddSticker}></CircleButton>
                  <IconButton icon= "save-alt" label= "Salvar" onPress={onSaveImageAsync}></IconButton>
              </View>
            </View>
      ) : (
       <View style = {styles.footerContainer}>
            <Button theme={"primario"} label={"Escolha uma foto"} onPress={pickImageAsync}/>
            <Button label={"Use essa foto"} onPress = {()=> setShowAppOptions(true)}/>
       </View>
      )}
      <StatusBar style="auto" />
    </GestureHandlerRootView>
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
  },

  optionsContainer: {
    position: 'absolute',
    bottom : 80,
  },

  optionsRow:{
    alignItems: 'center',  
    flexDirection: 'row',
  }
});
