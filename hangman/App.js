import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
    const caracteres = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.cabecalho}>
                <Text style={styles.cabecalhoTexto}>Jogo da Forca</Text>
            </View>
            <View style={styles.corpo}>
                <Image
                    style={styles.imagem}
                    source={require("./assets/imgs/hangman1.png")}
                    resizeMode="contain"
                />
                <Text>Letras utilizadas: A, B, C</Text>
                <View style={styles.adivinhaPalavraCaixa}>
                    <Text style={styles.letraCaixa}>E</Text>
                    <Text style={styles.letraCaixa}>L</Text>
                    <Text style={styles.letraCaixa}>E</Text>
                    <Text style={styles.letraCaixa}>F</Text>
                    <Text style={styles.letraCaixa}>A</Text>
                    <Text style={styles.letraCaixa}>N</Text>
                    <Text style={styles.letraCaixa}>T</Text>
                    <Text style={styles.letraCaixa}>E</Text>
                </View>
            </View>

            <View style={styles.rodape}>
                {caracteres.map((caracter) => (
                    <TouchableOpacity key={caracter} style={styles.caracter}>
                        <Text>{caracter}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    cabecalho: {
        backgroundColor: "#333",
        width: "100%",
        alignItems: "center",
        padding: 50,
    },
    corpo: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    rodape: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "stretch",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    caracter: {
        backgroundColor: "#fff",
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#333",
        borderWidth: 1,
        marginBottom: 5,
        marginHorizontal: 5,
    },
    cabecalhoTexto: {
        fontSize: 26,
        color: "#fff",
        fontWeight: "bold",
    },
    imagem: {
        height: 200,
    },
    adivinhaPalavraCaixa: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        flexWrap: "wrap",
        paddingVertical: 20,
    },
    letraCaixa: {
        width: 35,
        height: 35,
        textAlign: "center",
        borderBottomWidth: 3,
        borderBottomColor: "#ccc",
        marginHorizontal: 3,
    },
});
