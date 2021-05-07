/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View,Image, Alert,} from 'react-native';
import fotoBTC from './assets/ImagemBTC.png';
import fotoEstrela from './assets/EstrelaFavorito.png';
import fotoMoeda from './assets/Moedas.png';

const App = () => {

  function handleBotoes (button){
    switch (button){
      case 'favorito':
        Alert.alert('Favorito', 'Item adicionado aos favoritos')
        break
      case 'menu Moedas':
        Alert.alert('Menu Moedas', 'Redirecionando a tela de todas as moedas')
        break
      case 'menu Favoritos':
        Alert.alert('Menu Favoritos', 'Redirecionando a tela de favoritos')
        break
    }
  }

  return (
    <>
        <View style={style.telaContainer}>
              <View style={style.superiorContainer}>
                <Text style={style.nomeConfing}>BTC</Text>
                <Image source={fotoBTC} style={style.fotoMoeda}/>
                <Text style={style.nomeConfing}>BitCoin</Text>
                <Text style={style.volumesConfig}>$5.563,42</Text>
                <TouchableOpacity onPress={() => handleBotoes('favorito')}>
                  <Image source={fotoEstrela} style={style.fotoEstrelaFavorito}/>
                </TouchableOpacity>
              </View>
            <View style={style.inferiorContainer}>
                  <View style={style.volumesNegociadosContainer}>
                    <Text style={style.volumesNegociadosConfig}>Volumes Negociados:</Text>
                  </View>
                <View >
                    <View style={style.volumesContainer}>
                      <Text style={style.volumesConfig}>Ultima Hora:</Text>
                      <Text style={style.volumesConfig}>$1.760.523.834.930,48</Text>
                    </View>
                    <View style={style.volumesContainer}>
                      <Text style={style.volumesConfig}>Ultima Dia:</Text>
                      <Text style={style.volumesConfig}>$1.350.303.059.252.229,03</Text>
                    </View>
                    <View style={style.volumesContainer}>
                      <Text style={style.volumesConfig}>Ultimo Mês:</Text>
                      <Text style={style.volumesConfig}>$72.476.099.679.385.351,29</Text>
                    </View>
                </View>
                <View style={style.navigationContaner}>
                  <TouchableOpacity onPress={() => handleBotoes('menu Moedas')}>
                    <Image source={fotoMoeda} style={style.fotoMoedaNavgation}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleBotoes('menu Favoritos')}>
                    <Image source={fotoEstrela} style={style.fotoMoedaNavgation}/>
                  </TouchableOpacity>
                </View>
                </View>
        </View>
    </>
  );
};

const style = StyleSheet.create({
  telaContainer:{
    flex: 1,
  },
  superiorContainer:{
    alignItems: 'center',
    backgroundColor: '#6B8E23',
  },
  inferiorContainer:{
    flex: 1,
    backgroundColor: 'black',
  },
  volumesContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navigationContaner:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    margin: 10,
  },
  nomeConfing:{
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  volumesNegociadosContainer:{
    alignItems: 'center',
  },
  volumesNegociadosConfig:{
    fontSize: 21,
    color: 'white',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  volumesConfig:{
    marginBottom: 20,
    fontSize: 18,
    color: 'white',
  },
  fotoMoeda:{
    width: 90,
    height: 90,
  },
  fotoEstrelaFavorito:{
    margin: 10,
    width: 60,
    height: 60,
  },
  fotoMoedaNavgation:{
    marginTop: 20,
    width: 50,
    height: 50,
  },
});

export default App;
