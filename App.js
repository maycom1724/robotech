import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';

export default function App() {
  const [pagina, setpagina] = useState('home');
  return (
    <SafeAreaView style={styles.container}>
    <Header pagina={pagina} setpagina={setpagina} />
    <ScrollView contentContainerStyle={styles.content}>
    {pagina === 'home' && <Home />}
    {pagina === 'Sobre' && <Sobre />}
    {pagina === 'Servicos' && <Servicos/>}
    {pagina === 'Contato' && <Contato/>}
      </ScrollView>
      <Footer />
      </SafeAreaView>
  );
}

//melhor opçao
function Header ({ pagina, setpagina }){
 return (
  <View style={styles.Header}>
  <Text style={style.headerTitle}>robotech </Text>
  <View style={style.nav}>
  {['home','sobre', 'servicos','contato'].map((p) => (
    <TouchableOpacity
    key={p}
    style={[styles.navButton,pagina === p && style.navButtonActive]}
    onPress={()  => setpagina (p)}
    >
    <Text style={styles.navButtonText}>{p.charAt(0).toUpperCase() = p.slice(1)}</Text>
    </TouchableOpacity>
  ))}
 </View>
 </View>
);
}

function Home() {
return (
  <View style={style.section}>
   <Text style={styles.title}>SOBRE NOS</Text>
   <Text> fundada em 2025, temos o compromisso de qualidade e inovacao e novas oportunidades para o mundo</Text>
  </View>
 );
}

function Home() {
  return (
    <View style={style.section}>
     <Text style={styles.title}>Nossos Serviços</Text>
     <Text>-cunstrucao de robos  </Text>
     <Text>-  </Text>
     <Text>-  </Text>
    </View>
   );
  }

  function Contato() {
    const [Nome, setNome] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Mensagem, setMensagem] = React.useState('');

    function enviar() {
   if(!Nome || !Email || !Mensagem) {
     Alert.alert('Erro', 'porfavor ptrrncha todos os campos')
     return;
   }
    Alert.alert('mensagem enviada', `Obrigados, ${nome}! Retornaremos em breve.`);
    setNome('')
    setEmail('')
    serMensagem('');
  }

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Contato</Text>
    <TextInput
    style={styles.input}
    placeholder="Nome"
    value={nome}
    onchangeText={setNome}
    />
    <TextInput
    style={styles.input}
    placeholder="Email"
    value={Email}
    onchangeText={setEmail}
    keyboardTyme="email-address"
    />
    <TextInput
    style={[styles.input, {height: 100}]}
    placeholder="Mensagem"
    value={Mensagem}
    onchangeText={setMensagem}
    multiline
    />
    <TouchableOpacity style={styles.Button} onPress={enviar}>
      <Text style={style.ButtonText}>Enviar </Text>
    </TouchableOpacity>
    </View>
   );
 }
 function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{ color: 'white' }}>
        2025 minha empresa.
        todos os direitos reservados.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: '#f4f7fa'
  },
  header: {
    color:'white',
    fontSize: 24,
    fontWeinght: 'bold',
    marginBottom: 12
  },

  nav:{ 
    flexDirection:'row',
     justifycontent: 'space-around'
    },
 navButton: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 4 },
 navButtonActive: {backgroundColor: '#0066cc'},
 content: { color: 'white', fontWeight: 'bold'},
 content: { padding: 20, flexgrow: 1 },
 section: { marginBottom: 20 },
 title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
 input: {
  backgroundColor: '#ccc' ,
  borderWidth: 1,
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 4,
  marginBottom: 15,
 },
 button: {
  backgroundColor: 12,
  paddingVertical: 12,
  borderradius: 6,
  alignItems: 'center',
 },
 ButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
 footer: { backgroundcolor: '#00264d', padding: 15, alingItems: 'center' },

})