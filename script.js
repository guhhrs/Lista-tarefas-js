function addTarefa(event) {
    event.preventDefault()
    const inputTarefa = document.querySelector("#criar--tarefa"); 
    if(!inputTarefa.value){
        inputTarefa.classList.add("atencao");
        setTimeout( ()=>{
            inputTarefa.classList.remove("atencao")
        }, 5000)
        return
    } 

const novaTarefa = document.createElement("article"); 
novaTarefa.classList.add("tarefa--item")
novaTarefa.innerHTML = `<input type="checkbox" class="tarefa--check" name="concluido">
<h2 class="tarefa--titulo">${inputTarefa.value}</h2>`

const container = document.querySelector("#tarefas");


container.prepend(novaTarefa);
adicionarEventos();
atualizarContador(); 
}  

// const check = document.querySelector(".tarefa--check")
// checkbox.addEventListener("change", alternarTarefa) 

function adicionarEventos(){
    const todosChecks = document.querySelectorAll(".tarefa--check"); 
    for (const check of todosChecks) {
        check.addEventListener("change", alternarTarefa)
    }
} 

function alternarTarefa (event){
    const containerCheck = event.target.parentElement
    containerCheck.classList.add("concluida"); 

}

function dispararAlert(){
    alert("Passou 5 segundos!")
} 

function atualizarContador(){
    const numTarefas = document.querySelectorAll(".tarefa--item").length
    const contador = document.querySelector(".counter"); 
    if (numTarefas <= 0) {
        contador.textContent = "Tudo feito! 👍"
    } else {
        contador.textContent = `${numTarefas} ${numTarefas > 1 ? "tarefas" : "tarefa"}`
    } 
}

function filtrarTarefas(filtro){
    alert("disparou!")
    const todasTarefas = document.querySelectorAll(".tarefa--item"); 
    if (filtro === "concluida"){
        alert("entrei no if!!")
        for (const tarefa of todasTarefas) {
           if (tarefa.classList.contains("concluida")){
            tarefa.style.display = "flex" 
           } else {
            tarefa.style.display = "none"
           } {
            
           }
        }

        console.log(todasTarefas)
    }
}


const botaoAdd = document.querySelector("#add--tarefa"); 
const botaoConcluida = document.querySelector("#done");

botaoAdd.addEventListener("click", addTarefa); 
botaoConcluida.addEventListener("click", () => {filtrarTarefas("concluida")});

