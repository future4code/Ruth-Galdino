function criarTarefa() {

    if (document.getElementById("tarefa").value !=""){
    const tarefa = document.getElementById("tarefa")
    const diasSemana = document.getElementById("dias-semana").value
    const lista = document.getElementById(diasSemana)
    lista.innerHTML += `<li>${tarefa.value}</li>`
    tarefa.value =""
    }else(window.alert("Digite uma tarefa válida!"))

    
    
    console.log(escolherDia)
}
