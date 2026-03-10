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

  function apagarDigito(){
    setConta((valorAnterior) => valorAnterior.slice(0, -1))
  }

  function limparConta(){
    setConta("")
    setResultado("")
  }

  function calcularRaizQuadrada(numero: string){
    const resultado = Math.sqrt(Number(numero))
    setResultado(resultado.toString())
  }

  return (
    <SafeAreaView style={styles.fundo} >
      <View style={styles.display}>
        <Text style={styles.conta}>{conta}</Text>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity style={styles.botaoNumero} ></TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumero} onPress={() => limparConta()}>AC</TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumero} onPress={() => apagarDigito()}>C</TouchableOpacity>
        <TouchableOpacity style={styles.botaoSimbolos} onPress={() => adicionarNumero("/")}>/</TouchableOpacity>
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
        <TouchableOpacity style={styles.botaoNumero}></TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumero} onPress={() => adicionarNumero("0")}>0</TouchableOpacity>
        <TouchableOpacity style={styles.botaoSimbolos} onPress={calcular}>=</TouchableOpacity>
        <TouchableOpacity style={styles.botaoSimbolos} onPress={() => calcularRaizQuadrada(conta)}>v</TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: 'black', 
  },

  resultado: {
    color: '#ffffff',
    fontSize: 70
  },

  conta: {
    color: '#ffffff',
    fontSize: 70,
  },

  botaoNumero: {
    backgroundColor: '#303b33',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    color: '#ffffff'
  },

  botaoSimbolos: {
    backgroundColor: '#ff7605',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    color: '#ffffff'
  },

  linha: {
    flexDirection: "row"
  },

  display:{
    height: 200,
    justifyContent: "flex-end",
    padding: 20
  }
})
