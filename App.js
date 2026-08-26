import { useState } from 'react';
import { Button } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import Tarjeta from './src/componentes/Tarjeta';

export default function App() {

  const [pantalla, setPantalla] = useState(1);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.menu}>
        <Button title='Pantalla 1' onPress={() => setPantalla(1)}></Button>
        <Button title='Pantalla 2' onPress={() => setPantalla(2)}></Button>
        <Button title='Pantalla 3' onPress={() => setPantalla(3)}></Button>
        <Button title='Tarjeta' onPress={() => setPantalla(4)}></Button>
      </View>

      {pantalla === 1 && (
        <View style={styles.contenedor}>
          <Text style={styles.texto}>Hola Mundo</Text>
        </View>
      )}

      {pantalla === 2 && (
        <View style={styles.contenedor}>
          <View style={styles.card}>
            <Image source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB61qu1AucFtuFoqpCuKR0YPqsox4CJKmwn_3Fu9slamOUmt89CLIUOnhK&s=10"} style={styles.img}></Image>
            <Text style={styles.texto}>Logo de React Native</Text>
          </View>
        </View>
      )}

      {pantalla === 3 && (
        <View style={styles.contenedor}>
          <View style={styles.card}>
            <Text style={styles.titulo}>Tarjeta</Text>
            <Text style={{marginTop: 10}}>Ejemplo 3</Text>
          </View>
        </View>
      )}

      {pantalla === 4 && (
        <View style={styles.contenedor}>
          <Tarjeta></Tarjeta>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 20
  },

  texto: {
    marginTop: 30,
    fontSize: 18
  },

  card: {
    backgroundColor: "#e7dede",
    padding: 28,
    borderRadius: 20,
    alignItems: "center"
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 70,
    marginBottom: 30
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold"
  }

});
