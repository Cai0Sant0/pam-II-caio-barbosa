import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const PorImagem = require('../assets/images/background-image.png');

import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/button';

export default function App() {
  return (
    <View style={styles.container}>
       <View style = {styles.imageContainer}>
          <ImageViewer imagem={PorImagem}/>
       </View>
       <View style = {styles.footerContainer}>
            <Button label={"Escolha uma foto"}/>
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
