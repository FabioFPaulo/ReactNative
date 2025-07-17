import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export function ModalNovoJogo({ isVisible, conseguiuGanhar, resetJogo }) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View
                        style={{
                            ...styles.fundoTexto,
                            backgroundColor: conseguiuGanhar ? "green" : "red",
                        }}
                    >
                        <Text style={styles.modalText}>
                            {conseguiuGanhar ? "Você Ganhou" : "Você Perdeu"}
                        </Text>
                    </View>
                    <Pressable
                        style={styles.button}
                        onPress={() => resetJogo()}
                    >
                        <Text style={styles.textStyle}>Novo Jogo</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(51, 51, 51, 0.6)",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,

        alignItems: "center",

        width: "80%",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 30,
        width: "80%",
        backgroundColor: "#333",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    fundoTexto: {
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
});
