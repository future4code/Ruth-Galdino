

console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma partida?")) {
   console.log("inciando partida")
} else {
   console.log("encerrar partida")
}
   

   
   const usuarioA = comprarCarta()
   console.log(usuarioA.texto)
   console.log(usuarioA.valor)
   
   const usuarioB = comprarCarta()
   console.log(usuarioB.texto)
   console.log(usuarioB.valor)

   let somaUsuario = (usuarioA + usuarioB)

   const computadorA = comprarCarta()
   console.log(computadorA.texto)
   console.log(computadorA.valor)

   const computadorB = comprarCarta()
   console.log(computadorB.texto)
   console.log(computadorB.valor)
   
   
   let somaComputador = (computadorA + computadorB)
   
   
   alert(`Usuário - cartas: ${usuarioA.texto + usuarioB.texto} | ${usuarioA.valor + usuarioB.valor} - pontuação ${somaUsuario}
   Computador - cartas: ${computadorA.texto + computadorB.texto} | ${computadorA.valor + computadorB.valor} - pontuação ${somaComputador}`)
   
   

  if(somaUsuario === somaComputador){
      alert(" DEU EMPATE!")

  }else{
     if (somaUsuario > somaComputador){
        alert("USUARIO GANHOU, PARABÉNS!")
   
  }else{
     alert("COMPUTADOR GANHOU, PARABÉNS!")
  }
  }
   






