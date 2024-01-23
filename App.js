import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [message, setMessage] = useState('');

  const showAlert = () => {
    Alert.alert('Heippa!', message ? 'Syötit tekstin: ' + message 
    : 
    'Jos olisit kirjoittanut jotain, se lukisi tässä.');
  }

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [tulos, setTulos] = useState('');

  const yhteen = () => {
    const summa = parseFloat(number1) + parseFloat(number2);
    setTulos(summa);
  }

  const vahennys = () => {
    const erotus = parseFloat(number1) - parseFloat(number2);
    setTulos(erotus);
  }

  const kerto = () => {
    const tulo = parseFloat(number1) * parseFloat(number2);
    setTulos(tulo);
  }
  const jako = () => {
    const osamaara = parseFloat(number1) / parseFloat(number2);
    setTulos(osamaara.toFixed(2));
  }

  const Separator = () => <View style={styles.separator} />;

  return (

    <View style={styles.container}>

      <Text>Heipparallaa!</Text>
      <Text>Tässä on mun eka mobiilisovellus!</Text>

      <TextInput
        placeholder='Kirjoita tähän'
        style={{
          borderColor: 'blue',
          borderWidth: 1,
          padding: 10,
          margin: 10,
          width: 200,
          backgroundColor: 'lightblue'
        }}
        onChangeText={text => setMessage(text)} />
      <Button title="PAINIKE" onPress={showAlert} color="#de60c4" />
      <Separator />

      {/* LASKIN */}
      <View>
        <Text style={styles.otsikko}>LASKIN</Text>
      </View>

      <TextInput
        inputMode='numeric'
        style={{
          borderColor: 'blue',
          borderWidth: 1,
          padding: 10,
          margin: 10,
          width: 100,
          backgroundColor: '#A5D8F7',
        }}
        onChangeText={text => setNumber1(text)} />

      <TextInput
        inputMode='numeric'

        style={{
          borderColor: 'blue',
          borderWidth: 1,
          padding: 10,
          margin: 10,
          width: 100,
          backgroundColor: '#A5D8F7',
        }}
        onChangeText={text => setNumber2(text)} />

      <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ margin: 4 }}>
          <Button title="+" color="#5DCD25" onPress={yhteen} style={{}} />
        </View>
        <View style={{ margin: 4 }}>
          <Button title="-" color="#CD2525" onPress={vahennys} />
        </View></View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={{ margin: 4 }}>
          <Button title="x" color="#5DCD80" onPress={kerto} />
        </View>
        <View style={{ margin: 4 }}>
          <Button title="/" color="#CD2580" onPress={jako} />
        </View></View>

      <Text style={{ fontSize: 40 }}>{tulos}</Text>
      <StatusBar style="auto" />

      <Image style={{ width: '70%', height: 100, borderRadius: 10 }}
        source={require('./kuvat/kuva.jpg')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCEBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
    //EI TOIMI
  },
  otsikko: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#792BC7',
  }
});
