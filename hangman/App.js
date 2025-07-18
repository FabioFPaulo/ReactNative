import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import { ModalNovoJogo } from "./hangman/components/ModalNovoJogo";

export default function App() {
    const palavras = [
        "PANELA",
        "DINOSSAURO",
        "PINCEL",
        "CASA",
        "SOFA",
        "AVESTRUZ",
    ];

    const [letras, setLetras] = useState(palavras[0].split(""));
    const [letrasUtilizadas, setLetrasUtilizadas] = useState([]);
    const [estaVisibel, setEstaVisibel] = useState(false);
    const [conseguiuGanhar, setConseguiuGanhar] = useState(false);
    const [erros, setErros] = useState(6);

    const forca = [
        require("../assets/imgs/hangman1.png"),
        require("../assets/imgs/hangman2.png"),
        require("../assets/imgs/hangman3.png"),
        require("../assets/imgs/hangman4.png"),
        require("../assets/imgs/hangman5.png"),
        require("../assets/imgs/hangman6.png"),
        require("../assets/imgs/hangman7.png"),
    ];
    const [forcaAtiva, setForcaAtiva] = useState(0);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

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

    const aoClicarLetra = (letra) => {
        setLetrasUtilizadas([...letrasUtilizadas, letra]);

        // verificar se a palavra não existe no array de letras
        if (!letras.includes(letra)) {
            setForcaAtiva(forcaAtiva + 1);
            setErros(erros + 1);
        }
    };

    const foiUtilizada = (letra) => {
        return letrasUtilizadas.includes(letra);
    };

    useEffect(() => {
        const integer = getRandomInt(palavras.length);

        setLetras(palavras[integer].split(""));
    }, []);

    const mostrar = letras.map((x) => (letrasUtilizadas.includes(x) ? x : "_"));

    useEffect(() => {
        if (erros === 6) {
            setConseguiuGanhar(false);
            setEstaVisibel(true);
        }
    }, [erros]);

    useEffect(() => {
        if (!mostrar.includes("_")) {
            setConseguiuGanhar(true);
            setEstaVisibel(true);
        }
    }, [letrasUtilizadas]);

    const resetJogo = () => {
        setErros(0);
        setLetrasUtilizadas([]);
        setForcaAtiva(0);

        const integer = getRandomInt(palavras.length);

        setLetras(palavras[integer].split(""));
        setEstaVisibel(false);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.titulo}>
                <Text style={styles.tituloTexto}>Jogo da Forca</Text>
            </View>
            <View style={styles.conteudo}>
                <View style={styles.imagemCaixa}>
                    <Image
                        style={styles.imagem}
                        source={forca[forcaAtiva]}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.letrasUsadas}>
                    <Text>
                        Letras utilizadas: {letrasUtilizadas.join(", ")}
                    </Text>
                </View>

                <View style={styles.adivinhaPalavraCaixa}>
                    {mostrar.map((letra, index) => (
                        <View key={index} style={styles.letraCaixa}>
                            <Text style={styles.letraTexto}>
                                {letra === "_" ? "" : letra}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.letras}>
                {caracteres.map((e, index) => (
                    <TouchableHighlight
                        activeOpacity={0.3}
                        underlayColor="#666"
                        onPress={() => aoClicarLetra(e)}
                        disabled={foiUtilizada(e)}
                        style={{
                            ...styles.caracterCaixa,
                            opacity: foiUtilizada(e) ? 0.3 : 1,
                        }}
                        key={index}
                    >
                        <View>
                            <Text>{e}</Text>
                        </View>
                    </TouchableHighlight>
                ))}
            </View>
            <ModalNovoJogo
                isVisible={estaVisibel}
                conseguiuGanhar={conseguiuGanhar}
                resetJogo={resetJogo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    titulo: {
        paddingTop: 75,
        paddingBottom: 50,
        backgroundColor: "#333",
        width: "100%",
        alignItems: "center",
    },
    tituloTexto: {
        fontSize: 26,
        color: "#fff",
        fontWeight: "bold",
    },
    conteudo: {
        flex: 1,
        width: "100%",
    },
    letras: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: "#fff",
        width: "100%",
        flexWrap: "wrap",
        alignItems: "stretch",
        justifyContent: "center",
    },
    caracterCaixa: {
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
    imagemCaixa: {
        width: "100%",
        height: 200,
    },

    imagem: {
        width: "100%",
        height: "100%",
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
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: "#ccc",
        marginHorizontal: 3,
    },
    letrasUsadas: {
        paddingHorizontal: 20,
    },
});
