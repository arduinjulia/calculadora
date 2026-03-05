import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [conta, setConta] = useState("")
  const [resultado, setResultado] = useState("")

  function adicionarNumero(numero: string) {
    setConta((valorAnterior) => valorAnterior + numero);
  }


  function calcular() {
    const resultado = eval(conta);
    setResultado(resultado.toString());
  }

  return (
    <SafeAreaView style={styles.fundo} >
      <Text style={styles.conta}>{conta}</Text>
      <Text style={styles.resultado}>{resultado}</Text> 

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botaoSimbolos} onPress={() => adicionarNumero("V")}>x</TouchableOpacity>       
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("7")}>7</TouchableOpacity>  
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("8")}>8</TouchableOpacity>  
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("9")}>9</TouchableOpacity> 
        <TouchableOpacity style={styles.botaoSimbolos} onPress={() => adicionarNumero("*")}>x</TouchableOpacity>       
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("4")}>4</TouchableOpacity> 
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("5")}>5</TouchableOpacity>  
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("6")}>6</TouchableOpacity>
        <TouchableOpacity style={styles.botaoSimbolos} onPress={() => adicionarNumero("-")}>-</TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("1")}>1</TouchableOpacity>  
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("2")}>2</TouchableOpacity>  
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("3")}>3</TouchableOpacity>  
        <TouchableOpacity style={styles.botaoSimbolos} onPress={() => adicionarNumero("+")}>+</TouchableOpacity> 
      </View>



      <View style={styles.linha}>
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("0")}>0</TouchableOpacity> 
        <TouchableOpacity style={styles.botaoSimbolos} onPress={() => adicionarNumero("/")}>/</TouchableOpacity>   
        <TouchableOpacity style={styles.botaoSimbolos} onPress={calcular}>=</TouchableOpacity>   
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fundo:{
    backgroundColor: 'black'
  },

  resultado:{
    color:'#ffffff'
  },

  conta:{
    color: '#ffffff'
  },

  botaoNumero:{
		backgroundColor: '#303b33',
    width: 100,
    height: 100,
    borderRadius: 50,
		marginHorizontal: 10,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
    fontSize: 50,
    color:'#ffffff'
	},

  botaoSimbolos:{
		backgroundColor: '#ff7605',
    width: 100,
    height: 100,
    borderRadius: 50,
		marginHorizontal: 10,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
    fontSize: 50,
    color:'#ffffff'
	},
   
  linha:{
    flexDirection: "row"
  }
})
