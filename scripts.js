// 1º registrar (mapear) clique no botão
//criei uma variável e criei uma arrow function coloquei dentro da variável a arrow function
//coloquei um onclick nos botões no html chamando a minha arrow function a cada botão que eu
//e pedi para o console.log imprimir qual botão havia sido clicado no console.


//ENUMS
const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER:"paper",
  SCISSORS:"scissors"
}


const presult = document.querySelector(".result");
const userPointer = document.querySelector("#pointer-user");
const machinePointer = document.querySelector("#pointer-machine");

let saveHumanScore = 0;
let saveMachineScore = 0;

const playHuman = (humanchoice) => {
  playTheGame(humanchoice, playMachine());
};

// 2º preciso dá inteligência a minha maquina e preciso retornar qual das opções
// ela escolheu.
// primeiro eu criei uma variável e depois eu criei uma arrow function guardei a arrow function
//dentro desta variavel dentro do escopo da arrow function criei outra variável para guardar
//dentro dela as opções da minha maquinha depois disso criei uma outra variável para guardar
//a operação do Math.random() que vai me entregar a opção aleatoria escolhido pela minha
//máquina. coloquei para arredondar para baixo -> Math.floor <- o valor aleatório escolhido
//entre 0, 0.1, 0.2, 0.3, 0.4...1 multiplicado por 3.
//pedi um retorno da variavel que guarda as opções que minha maquina tem para escolher possuindo
// o resultado da operação feita pelo metodo random(lembrando que o Math.random nos entrega informações aleatorias)
//pedi na função de clicar no botão para imprimir na tela pelo console.log a escolha da minha maquina.

const playMachine = () => {
  const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
  const mathRandom = Math.floor(Math.random() * 3);
  return choices[mathRandom];
};

//3° essa função é para eu obter a resposta do resultado do humano e da maquina
//crio a variável depois crio a arrow function coloco dois valores dentro dela como paramnetro
//informo dentro do escopo dessa função que eu quero que me mostre na tela a resposta do humano
//e a resposta da maquina concatenando.
//dentro da função que chamo ao clicar no botão chamo a função que vai mostrar a resposta tanto do
//humano como da máquina coloco dois valores um é resultado do clique do botão e o outro valor
//é a escolha da maquina no final essas informações são exibidas na tela pelo console.log.

const playTheGame = (human, machine) => {
  console.log("Humano:  " + human + "  Máquina:  " + machine);

  if (human === machine) {
    presult.innerHTML = "Empatou 😑🤦‍♀️";
  } else if (
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    saveHumanScore++;
    userPointer.innerHTML = saveHumanScore;
    presult.innerHTML = "Parabéns, vc ganhou 🎉🤩";
  } else {
    saveMachineScore++;
    machinePointer.innerHTML = saveMachineScore;
    presult.innerHTML = "Máquina Ganhou 🤣🤡";
  }
};

// 4° agora preciso colocar na tela a apontuação de quem ganhou e colocar a informação de
//quem ganhou cada rodada.
//faço isso utilizando o if/else pq precisamos informar se 1- deu empate
// 2- se quem ganhou a rodada foi o humano 3- ou se quem ganhou foi a máquina


/*

ENUMS = é apenas uma variável que vai guardar informações e toda vez 
que eu tiver de usar essas informações a gente chama essa variável.

*/