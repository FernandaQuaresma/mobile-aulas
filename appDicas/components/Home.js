import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.start}>
                <Text style={styles.title}>Mundo do Programador</Text>
                <Text style={styles.sub}>Seu app de dicas para fazer a diferença no mercado de trabalho!</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.buttonArea}>
                <TouchableOpacity style={styles.botoes}>
                    <Text style={styles.buttonText}>Dica 1: Especialização é chave</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botoes}>
                    <Text style={styles.buttonText}>Dica 2: Networking é fundamental</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    start: {
        justifyContent: 'flex-start',
        alignItems: 'rigth',
        marginTop: 40,
        marginHorizontal: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#C71585',
        borderColor: 'pink'
    },

    sub: {
        fontSize:15,
        marginTop: 8,
    },

    buttonArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'rigth',
    },

    botoes: {
        padding: 10,
        backgroundColor:'#DDA0DD',
        borderRadius: 4,
        margin: 10
    },

    buttonText:{
        fontSize: 20,

    },

   
});
