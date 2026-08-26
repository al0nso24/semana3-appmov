import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function Tarjeta() {

    const [agregado, setAgregado] = useState(false)

    return (
        <View style={styles.contenedor}>
            <View style={styles.card}>
                <Text style={[styles.titulo, {marginBottom: 20}]}>User Profile</Text>
                <Image source={require("../../assets/chiikawa.png")} style={styles.imagen}></Image>
                <Text style={styles.titulo}>Alonso Zegarra Velásquez</Text>
                <Text style={{color: "gray"}}>20 years old</Text>

                {/*Si está agregado el efecto cambia (el botón se hace más oscuro)*/}
                <TouchableOpacity style={[styles.btn_agregar, agregado && styles.efecto_agregado]} onPress={() => setAgregado((a) => !a)}>
                    <Text style={[styles.texto_base, agregado && styles.texto_agregado]}>
                        {agregado ? "Agregado" : "Agregar"}
                    </Text>
                </TouchableOpacity>
                
                <View style={styles.card_desc}>
                    <Text style={{fontWeight: "bold", marginLeft: 9}}>User info</Text>
                    <View style={styles.contenedor_info}>
                        <View>
                            <Text style={styles.izq}>Bio</Text>
                            <Text style={styles.izq}>Age</Text>
                            <Text style={styles.izq}>Gender</Text>
                            <Text style={styles.izq}>Joined</Text>
                            <Text style={styles.izq}>Location</Text>
                            <Text style={styles.izq}>Reviews</Text>
                        </View>
                        <View>
                            <Text style={styles.der}>Hello y'all, I'm Alonso</Text>
                            <Text style={styles.der}>20 Years Old</Text>
                            <Text style={styles.der}>Male</Text>
                            <Text style={styles.der}>March 04, 2023</Text>
                            <Text style={styles.der}>Lima, Peru</Text>
                            <Text style={styles.der}>⭐⭐⭐⭐</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d3d3d3",
        width: "100%",
        height: "100%"
    },

    card: {
        padding: 30,
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "white"
    },

    imagen: {
        width: 150,
        height:150,
        marginBottom: 20,
        borderRadius: 200
    },

    titulo: {
        fontSize: 20,
        fontWeight: "bold"
    },

    btn_agregar: {
        marginTop: 10,
        backgroundColor: "#10B981",
        padding: 9,
        borderRadius: 10
    },

    efecto_agregado: {
        backgroundColor: "#15803D",  //Para el botón
    },

    texto_base: {
        fontWeight: "bold",
        color: "white",  //Color por defecto (Agregar)
    },

    texto_agregado: {
        color: "#94f8b9",  //Color cuando ya está agregado
    },

    card_desc: {
        marginTop: 18,
        backgroundColor: "#f3ebebde",
        borderRadius: 5,
        padding: 10
    },

    contenedor_info: {
        flexDirection: "row",
        width: "100%",
        padding: 10,
        gap: 90,
    },

    der: {
        textAlign: "right"  //Para que el texto se pegue a la derecha
    },

    izq: {
        textAlign: "left",  //Para que el texto se pegue a la izquierda
    }

})