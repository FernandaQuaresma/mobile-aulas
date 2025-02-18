import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
 
export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Programador Júnior</Text>
        <Text style={styles.text}>Um programador júnior está no início da carreira e ainda está adquirindo experiência prática. Ele costuma precisar de supervisão e orientação mais constante para resolver problemas e desenvolver soluções, focando principalmente em aprender as melhores práticas de programação.</Text>
       
        <View style={styles.img}>
          <Image source={require('./assets/programador-junior.jpg')} style={styles.imagem} />
        </View>
 
        <Text style={styles.titulo}>Programador Pleno</Text>
        <Text style={styles.text}>O programador pleno já possui mais experiência, geralmente de 2 a 5 anos, e consegue trabalhar de forma mais independente. Ele tem maior domínio de diversas ferramentas e linguagens de programação, além de ser capaz de lidar com problemas mais complexos, tomando decisões técnicas mais assertivas.</Text>
 
        <View style={styles.img}>
          <Image source={require('./assets/programador-pleno.png')} style={styles.imagem} />
        </View>
 
        <Text style={styles.titulo}>Programador Sênior</Text>
        <Text style={styles.text}>O programador sênior é um profissional experiente, com mais de 5 anos de atuação. Ele possui um profundo conhecimento técnico, consegue gerenciar projetos e equipes, além de tomar decisões estratégicas e arquiteturais no desenvolvimento de sistemas. Também tem um papel importante na mentoria de profissionais mais novos, compartilhando seu conhecimento e boas práticas.</Text>
 
        <View style={styles.img}>
          <Image source={require('./assets/programador-senior.jpg')} style={styles.imagem} />
        </View>
 
      </SafeAreaView>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  img: {
    marginVertical: 20,
    alignItems: 'center',
  },
  imagem: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});