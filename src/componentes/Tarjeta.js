import { useState } from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const usuarios = [  //Lista de usuarios
    {
        id: 1,  //id para mapear
        imagen: require("../../assets/chiikawa.png"),
        nombre: "Alonso Zegarra Velásquez",
        edad: "20 years",
        bio: "Hello y'all, I'm Alonso",
        genero: "Male",
        union: "Mar 04, 2023",
        location: "Lima, Peru",
        reviews: "⭐⭐⭐⭐",
        isOnline: true
    },

    {
        id: 2,  //id para mapear
        imagen: require("../../assets/bobafett.png"),
        nombre: "Gegi Minky",
        edad: "19 years",
        bio: "...",
        genero: "Female",
        union: "Mar 05, 2023",
        location: "Lima, Peru",
        reviews: "⭐⭐"
    },

    {
        id: 3,  //id para mapear
        imagen: require("../../assets/nose.jpg"),
        nombre: "Karol Figueroa",
        edad: "21 years",
        bio: ":v",
        genero: "Female",
        union: "August 28, 2026",
        location: "Barcelona, España",
        reviews: "⭐⭐⭐⭐",
        isOnline: true
    },

    {
        id: 4,  //id para mapear
        imagen: require("../../assets/usagi.jpeg"),
        nombre: "Alonso Dospuntosuve",
        edad: "20 years",
        bio: "Hello, I'm Alonso",
        genero: "Male",
        union: "August 28, 2026",
        location: "Lima, Peru",
        reviews: "⭐",
        isOnline: true
    },

]

function PerfilCard({ usuario, isOnline = false, cardWidth }) {
    const [agregado, setAgregado] = useState(false);

    return (
        <View style={[styles.card, { width: cardWidth }]}>
            <Text style={styles.titulo}>User Profile</Text>
            <View style={styles.avatarWrap}>
                <Image source={usuario.imagen} style={styles.imagen} />
                {isOnline && <View style={styles.onlineDot} />}
            </View>
            <Text style={styles.titulo}>{usuario.nombre}</Text>
            <Text style={styles.edad}>{usuario.edad}</Text>

            {/*Lógica del botón:*/}
            {/*Cuando agregado=true, se aplica el efecto del botón*/}
            <TouchableOpacity
                style={[styles.btn_agregar, agregado && styles.efecto_agregado]}
                onPress={() => setAgregado((estado) => !estado)}
            >
                {/*Cuando agregado=true, el texto cambia a "Agregado", también el color*/}
                <Text style={[styles.texto_base, agregado && styles.texto_agregado]}>{agregado ? "Agregado" : "Agregar"}</Text>
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
                        <Text style={[styles.der, {color: "green"}]}>{usuario.edad}</Text>
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
    const { width } = useWindowDimensions();
    const cardWidth = width < 600 ? "100%" : "48%";  //Si es menor a 600: Una tarjeta por fila

    return (
        <View style={{ flex: 1 }}>
            {/*ScrollView es para habilitar el scroll en la página*/}
            <ScrollView contentContainerStyle={styles.contenedor}>
                {usuarios.map((usuario) => (
                    <PerfilCard
                        key={usuario.id}
                        usuario={usuario}
                        isOnline={usuario.isOnline ?? false}
                        cardWidth={cardWidth}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        padding: 4,
        gap: 6,
        paddingBottom: 40  //Esto es para la separación entre página y barra inferior del celular
    },

    card: {
        margin: 2,
        padding: 6,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#f8f8f8",
        borderWidth: 1,
        borderColor: "#f3f2f2",
        borderStyle: "solid"
    },

    avatarWrap: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },

    imagen: {
        width: 45,
        height: 45,
        marginVertical: 4,
        borderRadius: 200,
    },

    onlineDot: {
        position: "absolute",
        right: 2,
        bottom: 8,
        width: 12,
        height: 12,
        borderRadius: 999,
        backgroundColor: "#22c55e",
        borderWidth: 2,
        borderColor: "#fff",
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

    efecto_agregado: {  //Efecto cuando el botón marca como "agregado"
        backgroundColor: "#15803D",
    },

    texto_base: {
        fontWeight: "bold",
        fontSize: 10,
        color: "white",
    },

    texto_agregado: {  //Efecto cuando el texto está como "agregado"
        color: "#75da9a"
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

    der: {  //Texto que va a la derecha en la parte de info del usuario
        textAlign: "right",
        fontSize: 8,
        lineHeight: 10,
    },
});
