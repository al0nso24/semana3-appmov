import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const usuarios = [
    {
        imagen: require("../../assets/chiikawa.png"),
        nombre: "Alonso Zegarra Velásquez",
        edad: "20 years",
        bio: "Hello y'all, I'm Alonso",
        genero: "Male",
        union: "Mar 04, 2023",
        location: "Lima, Peru",
        reviews: "⭐⭐⭐⭐"
    },

    {
        imagen: "../../assets/chiikawa.png",
        nombre: "Alonso Zegarra Velásquez",
        edad: "20 years",
        bio: "Hello, I'm Alonso",
        genero: "Male",
        union: "Mar 04, 2023",
        location: "Lima, Peru",
        reviews: "⭐⭐"
    },

    {
        imagen: require("../../assets/chiikawa.png"),
        nombre: "Alonso Zegarra Velásquez",
        edad: "20 years",
        bio: "Hello y'all, I'm Alonso",
        genero: "Male",
        union: "Mar 04, 2023",
        location: "Lima, Peru",
        reviews: "⭐⭐⭐⭐"
    },

    {
        imagen: require("../../assets/chiikawa.png"),
        nombre: "Alonso Zegarra Velásquez",
        edad: "20 years",
        bio: "Hello y'all, I'm Alonso",
        genero: "Male",
        union: "Mar 04, 2023",
        location: "Lima, Peru",
        reviews: "⭐⭐⭐⭐"
    },
]

function PerfilCard({ usuario }) {
    const [agregado, setAgregado] = useState(false);

    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>User Profile</Text>
            <Image source={usuario.imagen} style={styles.imagen} />
            <Text style={styles.titulo}>Alonso Zegarra Velásquez</Text>
            <Text style={styles.edad}>20 years old</Text>
            <TouchableOpacity
                style={[styles.btn_agregar, agregado && styles.efecto_agregado]}
                onPress={() => setAgregado((estado) => !estado)}
            >
                <Text style={styles.texto_base}>{agregado ? "Agregado" : "Agregar"}</Text>
            </TouchableOpacity>
            <View style={styles.card_desc}>
                <Text style={styles.subtitulo}>User info</Text>
                <View style={styles.contenedor_info}>
                    <View>
                        <Text style={styles.info}>Bio</Text>
                        <Text style={styles.info}>Age</Text>
                        <Text style={styles.info}>Gender</Text>
                        <Text style={styles.info}>Joined</Text>
                        <Text style={styles.info}>Location</Text>
                        <Text style={styles.info}>Reviews</Text>
                    </View>
                    <View>
                        <Text style={styles.der}>{usuario.bio}</Text>
                        <Text style={styles.der}>{usuario.edad}</Text>
                        <Text style={styles.der}>{usuario.genero}</Text>
                        <Text style={styles.der}>{usuario.union}</Text>
                        <Text style={styles.der}>{usuario.location}</Text>
                        <Text style={styles.der}>{usuario.reviews}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default function Tarjeta() {
    return (
        <View style={styles.contenedor}>
            {usuarios.map((usuario) => (
                <PerfilCard key={usuario.nombre} usuario={usuario} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#d3d3d3",
        padding: 4,
        gap: 6
    },

    card: {
        width: "48%",
        margin: 2,
        padding: 6,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "white",
    },

    imagen: {
        width: 45,
        height: 45,
        marginVertical: 4,
        borderRadius: 200,
    },

    titulo: {
        fontSize: 11,
        fontWeight: "bold",
        textAlign: "center",
    },

    edad: {
        color: "gray",
        fontSize: 9
    },

    btn_agregar: {
        marginTop: 4,
        backgroundColor: "#10B981",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 7,
    },

    efecto_agregado: {
        backgroundColor: "#15803D",
    },

    texto_base: {
        fontWeight: "bold",
        fontSize: 10,
        color: "white",
    },

    card_desc: {
        width: "100%",
        marginTop: 5,
        padding: 3,
        backgroundColor: "#f3ebebde",
        borderRadius: 5,
    },

    subtitulo: {
        fontWeight: "bold",
        fontSize: 10,
        marginLeft: 2,
    },

    contenedor_info: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2,
    },

    info: {
        fontSize: 8,
        lineHeight: 10,
    },

    der: {
        textAlign: "right",
        fontSize: 8,
        lineHeight: 10,
    },
});
